'use strict';


const httpStatus = require('http-status-codes');

const htmlContentType = {
    'content-Type': 'text/html'
};


// DEFINE routes object this stores routes mapped to 'POST' and 'GET' requests
// as routes are created in main.js theyll be added to this routes object
// according to their method type('GET' or 'POST')
const routes = {
    GET: {
        '/info': (req, res) => {
            res.writeHead(httpStatus.OK, {
                'content-Type' : 'text/plain'
            });
            res.end('Welcome to the Info Page!');
        }
    }, 
    POST : {}
};

// ? CREATE A FUNCTION CALLED handle to process the routes call back function
// function accesses routes object by request HTTP method through req.method
// and finds the corresponding callback function through request url target using req.url

//! Example  
// ? GET request for  /index.html URL Path
// routes method = 'GET' AND URL 'index.html' which gives us the callback function predefined in routes object
// whatever callback is found in routes object is called  and passed 
// if no route is found response is httpStatus.NOT_FOUND
// The handle function checks if an incoming request matches  a route  in the routes object by
// it's HTTP method and URL OTHERWISE it logs an error

exports.handle = (req,res) => {
    try {
        if (routes[req.method][req.url]) {
            routes[req.method][req.url](req, res);
        } else {
            res.writeHead(httpStatus.NOT_FOUND);
            res.end('<h1>No such file exists</h1>');
        }
    } catch (ex) {
        console.log('error: '+ ex);
    }
};


// These will export to the main.js file so we can know if it's a get request or a post request
exports.get = (url, action) => {
    routes['GET'][url] = action
};

exports.post = (url, action) => {
    routes['POST'][url] = action;
};
