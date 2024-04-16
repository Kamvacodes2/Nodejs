'use strict';

const port = 3000;
const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const homeControllers = require('./controllers/homeControllers');




// 9.2
//get requests 
// route parameters
/// way to send data through requests
//? route params have colons e.g "/items/:vegetable"

app.get("/items/:vegetable", homeControllers.sendParams);


//? 9.3
//? EXPRESS JS is a type of middleware
//adds layer for request being recieved and request being processed
// customise the middleware? e.g log the path of every request made
// you can create a middleware function 
// next is a way of calling the next function IN your request response execution flow
// this lets your request chain know that the first function is complete and we can move to the next function in the chain



/// 9.1 tested through the terminal
// app.post('/contact', (req, res)=> {
//     res.send("Contact information submitted successfully.")
// });

// 9.4 
// create route with app.use
// runs every request difference is that you add addtional argument in callback : the next function
// allows to run code before url path matches with any other routes in app
// once custome code is complete, next points request to next route that matches path
app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next(); // Calling next at the end of your function is necessary to alert Express.js that
    // your code has completed
});

// ? If you want to specify a path for your middleware you can by doing the following
// app.use('/items', (callback))

//9.5

// ? analyze  incoming request bodies 
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.post('/', (req, res)=> {
    console.log("REQUEST BODY: ", req.body);
    console.log("REQUEST QUERY: ", req.query);
    res.send('POST SUCCESSFUL');
});

app.listen(port);
console.log('Listening in port number ' + port);

