'use strict';
//use the --save flag to ensure that express is listed as an applicarion dependency
//? this means your application depends on express.js to work

//! if you don't utilize --save in your express installation what happens?
// express js won't be marked as a dependency
//you application will run locally 
// because it will be downloaded to your node modules folder
//? but if you upload your project there won't be an indication that express js is a dependency

//? params

const port = 3000;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("request parameters"+ req.params); //? params extract IDs and tokens from URL
    console.log("requst body"+ req.body); //! contain the contents of a request i.e data coming from POST request like form
    console.log("request url"+ req.url); // info about URL being visited
    console.log("request query"+ req.query); // lets you pull data being submitted to app server NOT always from POST request
    res.send('Hello Universe!');
});

app.listen(port);
console.log('Listening on port number: ' + port);

