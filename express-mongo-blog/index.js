const path = require('path');
const express = require('express');
const expressEdge = require('express-edge'); //Other way is const {engine} = require('express-edge'); and then use it
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { log } = require('console');
const aboutCtrl = require('./controller/about');
const newPostCtrl = require('./controller/new-post');
const contactCtrl = require('./controller/contact');
const homeCtrl = require('./controller/home');
const storePostCtrl = require('./controller/store-post');
const postCtrl = require('./controller/post');

const app = new express();
mongoose.connect('mongodb://localhost/express-mongo-blog');

app.use(express.static('public'));

app.use(expressEdge.engine);
app.set('views', `${__dirname}/views`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const postValidator = (req, res, next) => {
    const data = req.body;
    if(!data.createdBy || !data.title || !data.subtitle || !data.content) {
        console.log("Invalid form");
        return  res.redirect('/post/new');
    }
    next();
}

app.use('/post/store', postValidator);


app.get('/', homeCtrl);

app.get('/about', aboutCtrl);

app.get('/post/new', newPostCtrl)

app.post('/post/store', storePostCtrl);

app.get('/post/:id', postCtrl);

app.get('/contact', contactCtrl);

app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});