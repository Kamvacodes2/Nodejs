'use strict';

"use strict";

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});


// const express = require('express');
// const app = express(); 
// const homeController = require('./controllers/homeController');
// const errorController = require('./controllers/errorController');
// const layouts = require('express-ejs-layouts');
 


// //setting app layout
// app.set('view engine','ejs');

// app.set('port', process.env.PORT || 3000)

// // utilising the layouts
// app.use(layouts);

// //middleware that interprets incoming request bodies
// app.use(express.urlencoded({
//     extended: false
// }));
// app.use(express.json());

// // serving static views
// app.use(express.static('public'));

// app.get('/', (req, res)=> {
//     res.send('index');
// })

// // adding the error responses

// app.use(errorController.pageNotFoundError);
// app.use(errorController.internalServerError);


// // app.get('/', (req, res) =>{
// //     res.send(`Welcome to Confetti Cuisine`);
// // });

// app.get('/courses', homeController.showCourses);
// app.get('/contact', homeController.showSignUp);
// app.post('/contact', homeController.postedSignUpForm);

// app.listen(app.get('port'), ()=>{
//     console.log(`Server running at http://localhost:${app.get(
//         "port"
//          )}`);
// });