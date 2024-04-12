'use strict';

'6.4'

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

// creating an error sending function for callback purposes

const sendErrorResponse = res => {
    res.writeHead(httpStatus.NOT_FOUND, {
        'content-Type': 'text/html'
    });
    res.write('<h1>File Not Found!</h1>');
    res.end();
};


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
const app = http
    .createServer((req, res) => {
        let url = req.url;

        if(url.indexOf(".html") !== -1) { // this is checking if it contains a file extension of ".html"
            res.writeHead(httpStatus.OK, {
                'content-Type': 'text/html'
            });
            customReadFile(`./views${url}`, res);
        } else if (url.indexOf(".js") !== -1) {
            res.writeHead(httpStatus.OK, {
                'content-Type': 'text/javascript'
            });
            customReadFile(`./public/js${url}`, res);
        } else if (url.indexOf('.css') !==-1) {
            res.writeHead(httpStatus.OK, {
                'content-Type': 'text/css'
            });
            customReadFile(`./public/css${url}`, res);
        } else if (url.indexOf('.png') !==1 ) {
            res.writeHead(httpStatus.OK, {
                'content-Type' : 'image/png'
            });
            customReadFile(`./public/images${url}`, res);
        } else {
            sendErrorResponse(res);
        }
    });

// create a customereadFile to reduce code repetition

const customReadFile = ((file_path, res) => {
    // existsSync returns true if the file path exists
    if (fs.existsSync(file_path)) {
        fs.readFile(file_path, (err, data) => {
            if (err) {
                console.log(err);
                //callback to trigger send error Function
                sendErrorResponse(res);
                return;
            }
            res.write(data);
            res.end();
        });
    } else {
        sendErrorResponse(res);
    }
});

app.listen(port);
console.log('Listening in port ' + port);