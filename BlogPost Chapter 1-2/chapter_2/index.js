'use strict';

// express makes the process we conducted in chapter 1 so much easire
const express = require('express');
const app = express();
///! if we want to serve a file we have to do the following
const path = require('path');

// ! // serving static files like images and css
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('App listeninig on port 3000');
});

// app.get('/', (req, res) => {
//     res.json({
//         name: 'Greg Lim'
//     });
// });

// app.get('/about', (req, res) => {
//     res.json({
//         name: 'Kamva Soga'
//     });
// });

app.get('/', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

// serving other html files

app.get('/about', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'about.html'));
});

app.get('/contact', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'contact.html'));
});



/// without express we had to create a lengthy if else  conditional for our request handler 
//! we can refactor a large request handler into singular and simple ones as seen above
//! we can build our app a modular and maintanable way.

// const server = http.createServer((req, res) => {
//     if (req.url === '/about')
//         res.end(aboutPage)
//     else if (req.url === '/contact')
//         res.end(contactPage)
//     else if (req.url === '/')
//         res.end(homePage)
//     else {
//         res.writeHead(404)
//         res.end(notFoundPage)
//     }
// })

//? /////////////////////////////////////////////////////////////

// const http = require('http')
// const server = http.createServer((req, res) =>{
// })
// server.listen(3000)
