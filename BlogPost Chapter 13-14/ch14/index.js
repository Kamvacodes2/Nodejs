const express = require('express'),
ejs = require('ejs'),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
fileUpload = require('express-fileupload'),
newPostController = require('./controllers/newPost'),
homeController = require('./controllers/home'),
getPostController = require('./controllers/getPost'),
storePostController = require('./controllers/storePost'),
validateMiddleWare = require('./middleware/validationMiddleware'),
authMiddleware = require('./middleware/authMiddleware'),
redirectIfAuthenticated = require('./middleware/redirectIfAuthenticatedMiddleware'),
newUseController = require('./controllers/newUser'), 
storeUserController = require('./controllers/storeUser'),
loginController = require('./controllers/login'),
loginUserController = require('./controllers/loginUser'),
logoutController = require('./controllers/logout'),
expressSession = require('express-session');
const app = express();
app.use(fileUpload());

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true})

app.listen(4000, ()=>{
    console.log('App listening on port 4000');
})

const flash = require('connect-flash');

//set up ejs for layouts
app.set('view engine', 'ejs'); // any file ending with ejs should be rendered with the ejs package

//! register connect flash
app.use(flash());

app.use(express.static('public'));

//enable body parser use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


//! utilize express sessisons

app.use(expressSession({
    secret: 'keyboard cat' // secret string is used sign and encrypt a session ID shared with browser
}))

//set up routes for HTML files

// app.get('/', (req, res)=>{
//     // res.sendFile(path.resolve(__dirname, 'pages/index.html'));
//     res.render('index')
// })

//? creating validation Middle ware make sure this comes after the app.usefile upload

app.use('/posts/store', validateMiddleWare)

//? variable to check if logged in

global.loggedIn = null

app.use('*', (req, res, next)=> {
    loggedIn = req.session.userId;
    next()
});



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

app.get('/posts/new', authMiddleware, newPostController);

//new user 
app.get('/auth/register', redirectIfAuthenticated, newUseController)

//login controller
app.get('/auth/login', redirectIfAuthenticated, redirectIfAuthenticated, loginController);


// logout controller

app.get('/auth/logout', logoutController);

//register user and store info in database
app.post('/users/register', redirectIfAuthenticated, storeUserController)

// app post to trigger when a user on db is signing in

app.post('/users/login', redirectIfAuthenticated, loginUserController);

//?original blog post creation now
// app.post('/posts/store', async (req, res)=>{
//    // utilising BlogPost callback to create a document in our database
//    await BlogPost.create(req.body)
//     res.redirect('/');
// })

// ! new blog post creation with image
app.post('/posts/store', authMiddleware, storePostController)

//! render 404 if page is not found

app.use((req,res)=> res.render('notfound'));