const mongoose = require('mongoose');

const Post = require('./database/models/Post');

mongoose.connect('mongodb://localhost/express-mongo-blog-test');

Post.create({
    title: "Express-mongo-blog Test",
    description: "Somen Description",
    content: "Content goes here"
}, (error, post) => {
    console.log(error, post);
})