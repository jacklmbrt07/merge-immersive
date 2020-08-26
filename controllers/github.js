const axios = require("axios")
const User = require("../models/user");


module.exports = {
    github,

};

async function github(req, res) {
    const user = User.findOne({ githubUsername: req.body.githubUsername });
    await axios.get(`https://api.github.com/users/${user}`)
        .then((res) => res.json())
        .then((data) => this.seState({ data }))
}
