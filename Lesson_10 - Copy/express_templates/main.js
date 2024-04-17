'use strict';


const express = require('express');
const homeController = require('./controller/homeController');
const layouts = require('express-ejs-layouts');
const app = express();

//10.1 
// This lets express know you want to use
//? this tells your express js app to set its view engine as ejs
// this is how your app knows to expect ejs as your views folder 
app.set('view engine', 'ejs');

app.set('port', process.env.PORT || 3000);

app.use(layouts);

// 10.2

app.get('/name/:myName', homeController.respondWithName);


app.listen(app.get('port'));
console.log(`Server is currently running on port number ${app.get('port')}`);
