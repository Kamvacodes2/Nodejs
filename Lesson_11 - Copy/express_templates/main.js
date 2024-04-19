'use strict';


const express = require('express');
const app = express();
const homeController = require('./controller/homeController');
const layouts = require('express-ejs-layouts');
const errorController = require('./new_controller/errorController');


//10.1 
// This lets express know you want to use
//? this tells your express js app to set its view engine as ejs
// this is how your app knows to expect ejs as your views folder 
app.set('view engine', 'ejs');

app.set('port', process.env.PORT || 3000);

app.use(layouts);

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(homeController.logRequestPaths);

// serving the static files to users
app.use(express.static('public'));


// adding the error handlers
app.use(errorController.logErrors);
app.use(errorController.responseNoResourceFound);
app.use(errorController.respondInternalError);


// 10.2

// app.get('/name/:myName', homeController.respondWithName);
app.get('/name', homeController.respondWithName);


app.listen(app.get('port'));
console.log(`Server is currently running on port number ${app.get('port')}`);
