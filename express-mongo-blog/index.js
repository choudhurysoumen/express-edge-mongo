const path = require('path');
const express = require('express');
const expressEdge = require('express-edge'); //Other way is const {engine} = require('express-edge'); and then use it
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = new express();
mongoose.connect('mongodb://localhost/express-mongo-blog');

app.use(express.static('public'));

app.use(expressEdge.engine);
app.set('views', `${__dirname}/views`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/post/new', (req, res) => {
    res.render('new-post');
})

app.post('/post/store', (req, res) => {
    console.log(req.body)
     res.redirect('/');
});

app.get('/post', (req, res) => {
    res.render('post');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});