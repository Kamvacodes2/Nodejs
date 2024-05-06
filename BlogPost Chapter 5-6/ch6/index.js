const express = require('express'),
path = require('path'),
ejs = require('ejs'),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
BlogPost = require('./models/BlogPost');
const app = express();

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true})

app.listen(4000, ()=>{
    console.log('App listening on port 4000');
})


//set up ejs for layouts
app.set('view engine', 'ejs'); // any file ending with ejs should be rendered with the ejs package

app.use(express.static('public'));

//enable body parser use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//set up routes for HTML files

// app.get('/', (req, res)=>{
//     // res.sendFile(path.resolve(__dirname, 'pages/index.html'));
//     res.render('index')
// })

// rendering all the blogposts in the database

app.get('/', async (req, res)=>{
    const blogposts = await BlogPost.find({})
    console.log(blogposts);
    res.render('index', {blogposts: blogposts }) // including the blogposts as an accessible object allowed the ejs to read it and identify it
})

app.get('/about', (req, res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/about.html'));
    res.render('about')
})

app.get('/contact', (req, res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
    res.render('contact') // we send a view to the user utilizing render  this looks in the views folder
})

//? older version of post
// app.get('/post', (req, res)=>{
//     // res.sendFile(path.resolve(__dirname, 'pages/post.html'));
//     res.render('post')
// })

// render single blog post page

app.get('/post/:id', async (req, res)=>{ // attaching :id represents a wild card that accepts any string value
    const blogpost = await BlogPost.findById(req.params.id) // params after post can then be retrieved with req.params
    res.render('post', {blogpost});
})

// create a new post

app.get('/posts/new', (req, res)=>{
    res.render('create');
})

app.post('/posts/store', async (req, res)=>{
   // utilising BlogPost callback to create a document in our database
   await BlogPost.create(req.body)
    res.redirect('/');
})