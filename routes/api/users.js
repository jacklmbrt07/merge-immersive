const express = require('express');
const router = express.Router();
const axios = require('axios');
const usersCtrl = require('../../controllers/users');
const db = require('../../config/database');
const User = require("../../models/user");
const cors = require('cors');
router.use(cors());

/*---------- Public Routes ----------*/
router.post('/login', usersCtrl.login);
router.post('/signup', usersCtrl.signup);
router.put('/:id', usersCtrl.update);


/*---------- Protected Routes ----------*/



router.put('/profile', function (req, res) {
    const userName = req.body.githubUsername;
    var githubUrl = `https://api.github.com/users/${userName}`;
    axios.get(githubUrl, {
        headers: {
            "User-Agent": "hoseacodes",
            "Authorization": "token " + process.env.GitHub_Token
        }
    }).then(function (userInfo) {
        User.findByIdAndUpdate(req.body.id, {
            avatar: userInfo.avatar_url,
            company: userInfo.company,
            blog: userInfo.blog,
            location: userInfo.location,
            bio: userInfo.bio,
            twitter: userInfo.twitter_username,
            repo: userInfo.public_repos,
            followers: userInfo.followers,
            following: userInfo.following
        }).then((user) => {
            res.send(user)
        })
    }).catch(err => {
        console.log(err);
        res.send('error');

    })
})

router.get('/profile', function (req, res) {
    db.User.findById(req.user._id).populate(User)
        .then(user => {
            res.send(user)
        })
})

router.get('/', (req, res) => {
    User.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.get('/profile/:id', function (req, res) {
    db.User.findOne(req.params.id)
        .then(info => {
            res.send(info)
        })
        .catch(err => res.send({ message: 'Error in getting user', err }));
})

module.exports = router;