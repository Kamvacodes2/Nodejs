const express = require('express'),
path = require('path');
const app = express();

app.listen(4000, ()=>{
    console.log('App listening on port 4000');
})

app.use(express.static('public'));

//set up routes for HTML files

app.get('/index', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
})

app.get('/about', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'pages/about.html'));
})

app.get('/contact', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
})

app.get('/post', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'pages/post.html'));
})

