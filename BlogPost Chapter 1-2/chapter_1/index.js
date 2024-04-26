'use strict';

const http = require('http');
// responding with html instead of static text
const fs = require('fs');
const homePage = fs.readFileSync('index.html');
const contactPage = fs.readFileSync('contact.html');
const aboutPage = fs.readFileSync('about.html');
const notFound = fs.readFileSync('notfound.html');
const server = http.createServer((req, res)=> {
    if (req.url == '/')
    res.end(homePage);
    else if (req.url == '/contact')
    res.end(contactPage);
    else if (req.url == '/about')
    res.end(aboutPage);
    else {
        res.writeHead(404)
        res.end(notFound);
    }
});

// responding with static text
// const server = http.createServer((req, res) =>{
//     if (req.url == '/about')
//     res.end('The about page');
//     else if (req.url == '/contact')
//     res.end('The contact page');
//     else if (req.url == '/')
//     res.end('The home page')
//     else {
//         res.writeHead(404);
//         res.end('page not found');
//     }
// });

server.listen(3000);