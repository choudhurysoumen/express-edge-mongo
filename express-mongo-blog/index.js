const path = require('path');
const express = require('express');
const expressEdge = require('express-edge'); //Other way is const {engine} = require('express-edge'); and then use it
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./database/models/Post');


const app = new express();
mongoose.connect('mongodb://localhost/express-mongo-blog');

app.use(express.static('public'));

app.use(expressEdge.engine);
app.set('views', `${__dirname}/views`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const customMiddleware = (req, res, next) => {
    console.log("I am middleware");
    next();
}

app.use(customMiddleware);


app.get('/', async (req, res) => {
    const posts = await Post.find({});
    console.log(posts);
    res.render('index', {
        posts
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/post/new', (req, res) => {
    res.render('new-post');
})

app.post('/post/store', (req, res) => {
    Post.create(req.body, (req, post) => {
         res.redirect('/');
    })
});

app.get('/post/:id', async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.render('post', {
        post
    });
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});