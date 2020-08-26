const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/user')

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK
},
    function (accessToken, refreshToken, profile, cb) {
        User.findOne({ 'githubId': profile.id }, function (err, user) {
            if (err) return cb(err);
            if (user) {
                return cb(null, user);
            } else {
                const newUser = new User({
                    githubUsername: profile.displayName,
                    email: profile.user.email,
                    avatar: profile.photos[0].value,
                    githubId: profile.id,
                    projects: profile.public_repo,
                });
                newUser.save(function (err) {
                    if (err) return cb(err);
                    return cb(null, newUser);
                });
            }
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});