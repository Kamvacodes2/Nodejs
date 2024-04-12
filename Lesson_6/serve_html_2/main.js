'use strict';

const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');
const fs = require('fs');
const router = require('./router');
const plainTextContentType = {
    'content-Type': 'text/plain'
};
const htmlContentType = {
    'content-Type': 'text/html'
};

// const imageContentType = {
//     'content-Type': 'image/png'
// }
// // create a customereadFile to reduce code repetition

const customereadFile = (file_path, res) => {
    fs.readFile(`./${file_path}`, (error, data)=> {
        if(error) {
            console.log("Error reading the file...");
        }
        res.end(data);
    });
};


// creating an error sending function for callback purposes

//because we have created a get View Url function we no longer need to have a routes map

// const getViewUrl = ((url) => {
//     return `views${url}.html`
// });

// ? initial demonstration of accessing utilizing the url 

// const app = http.createServer((req, res) => {
//     let viewUrl = getViewUrl(req.url);
//     console.log(viewUrl);
//     fs.readFile(viewUrl, (error, data) => {
//         if (error) {
//             res.writeHead(httpStatus.NOT_FOUND);
//             res.write('"<h1>FILE NOT FOUND</h1>');
//         } else {
//             res.writeHead(httpStatus.OK, {
//                 'content-Type': 'text/html'
//             });
//             res.write(data);
//         }
//         res.end();
//     });
// });


// second demonstration utilizing multiple options

const app = http.createServer(router.handle);

router.get('/', (req, res)=> {
    res.writeHead(httpStatus.OK, plainTextContentType);
    res.end('INDEX');
});

router.get('/index.html', (req,res)=> {
    res.writeHead(httpStatus.OK, htmlContentType);
    customereadFile('./views/index.html', res);
});


router.post('/', (req, res) => {
    res.writeHead(httpStatus.OK, plainTextContentType);
    res.end('POSTED');
});


app.listen(port);
console.log('Listening in port ' + port);