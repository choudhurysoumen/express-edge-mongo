const User = require('../database/models/User');

module.exports = (req, res) => {
    User.create(req.body, (err, user) => {
        if(err) {
            return  res.redirect('/user/register');
        }
        res.redirect('/');
    });
}