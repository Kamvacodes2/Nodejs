const express = require('express'),
path = require('path'),
ejs = require('ejs');
mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true})

app.listen(4000, ()=>{
    console.log('App listening on port 4000');
})


//set up ejs for layouts
app.set('view engine', 'ejs'); // any file ending with ejs should be rendered with the ejs package

app.use(express.static('public'));

//set up routes for HTML files

app.get('/', (req, res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/index.html'));
    res.render('index')
})

app.get('/about', (req, res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/about.html'));
    res.render('about')
})

app.get('/contact', (req, res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
    res.render('contact') // we send a view to the user utilizing render  this looks in the views folder
})

app.get('/post', (req, res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/post.html'));
    res.render('post')
})

