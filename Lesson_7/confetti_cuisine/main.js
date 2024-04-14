'use strict';

const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');
const router = require('./router');
const contentTypes = require('./contentTypes');
const utils = require('./utils');


router.get('/', (req, res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile('views/index.html', res);
});

router.get('/courses.html', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile('views/courses.html', res);
});

router.get('/contact.html', (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile('views/contact.html', res);
});

router.post('/', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile('views/thanks.html', res);
});

// Retrieving  the files from the public folder using router

router.get('/graph.png', (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile('/public/images/graph.png', res);
});

router.get('/cat.jpg', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile('/public/images/cat.jpg', res);
});

router.get('/people.png', (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile('/public/images/people.png', res);
});

router.get('/product.jpg', (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile('/public/images/product.jpg', res);
});

// retrieve the css that will link to the index html;

router.get('/bootstrap.css', (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile('/public/css/bootstrap.css', res);
});

router.get('/confetti_cuisine.css', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile('/public/css/confetti_cuisine.css', res);
});

router.get('/confettiCuisine.js', (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.js);
    utils.getFile('/public/js/confettiCuisine.js', res);
});

http.createServer(router.handle).listen(port);
console.log('listening on Port: ' + port);