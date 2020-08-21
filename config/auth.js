const jwt = require('jsonwebtoken');
const SECERT = process.env.SECERt;

module.exports = function (req, res, next) {
    let token = req.get('Authorixation') || req.query.token || req.body.token
    if (token) {
        token = token.replace('Bearer ', "");
        jwt.verify(token, SECERT, function (err, decoded) {
            if (err) {
                next(err);
            } else {
                req.user = decoded.user;
                next();
            }
        });
    } else {
        next();
    }
}