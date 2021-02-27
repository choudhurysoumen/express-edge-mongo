const mongoose = require('mongoose');

const Post = require('./database/models/Post');

mongoose.connect('mongodb://localhost/express-mongo-blog-test');

/* Post.create({
    title: "Express-mongo-blog Test",
    description: "Somen Description",
    content: "Content goes here"
}, (error, post) => {
    console.log(error, post);
})


Post.find({}, (error, posts) => {
    console.log(error, posts);
})

Post.findById('603acf7a509a8f1fe4ebc847', (error, posts) => {
    console.log(error, posts);
})

Post.findByIdAndUpdate('603acf7a509a8f1fe4ebc847', {
    content: "Updated content"
},(error, posts) => {
    console.log(error, posts);
}) */