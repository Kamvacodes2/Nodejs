const express = require('express'),
ejs = require('ejs'),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
fileUpload = require('express-fileupload'),
newPostController = require('./controllers/newPost'),
homeController = require('./controllers/home'),
getPostController = require('./controllers/getPost'),
storePostController = require('./controllers/storePost'),
validateMiddleWare = require('./middleware/validationMiddleware');
const app = express();
app.use(fileUpload());

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

//? creating validation Middle ware make sure this comes after the app.usefile upload

app.use('/posts/store', validateMiddleWare)

// rendering all the blogposts in the database

app.get('/', homeController)

//! no longer required 
// app.get('/about', (req, res)=>{
//     // res.sendFile(path.resolve(__dirname, 'pages/about.html'));
//     res.render('about')
// })

//! no longer required 
// app.get('/contact', (req, res)=>{
//     // res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
//     res.render('contact') // we send a view to the user utilizing render  this looks in the views folder
// })

//! no longer required 
//? older version of post
// app.get('/post', (req, res)=>{
//     // res.sendFile(path.resolve(__dirname, 'pages/post.html'));
//     res.render('post')
// })

// render single blog post page

app.get('/post/:id',getPostController);

// create a new post

app.get('/posts/new', newPostController);

//?original blog post creation now
// app.post('/posts/store', async (req, res)=>{
//    // utilising BlogPost callback to create a document in our database
//    await BlogPost.create(req.body)
//     res.redirect('/');
// })

// ! new blog post creation with image
app.post('/posts/store',storePostController)