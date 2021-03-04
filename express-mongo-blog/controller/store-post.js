const Post = require('../database/models/Post')

module.exports = (req, res) => {
    Post.create(req.body, (err, post) => {
        res.redirect('/');
   })
}