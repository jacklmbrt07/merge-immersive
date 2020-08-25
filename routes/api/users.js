const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/login', usersCtrl.login);
router.post('/signup', usersCtrl.signup);
router.get('/', usersCtrl.index);

/*---------- Passport Routes ----------*/
router.get('/auth/github', passport.authenticate(
    'github',
    { scope: ['user:email', 'public_repo', 'user:follow', 'read:user'] }
));

router.get('/auth/github/callback', passport.authenticate(
    'github',
    {
        successRedirect: '/',
        failureRedirect: '/login'
    }
));

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
/*---------- Protected Routes ----------*/




module.exports = router;