const User = require('../database/models/User');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
    const {email, password} = req.body;
    User.findOne({email}, (error, user) => {
        if(!error && user) {
            bcrypt.compare(password, user.password, (err, valid) => {
                valid ? res.redirect('/') : res.redirect('/user/login');
            })
        } else {
            return res.redirect('/user/login');
        }
    });
    
}