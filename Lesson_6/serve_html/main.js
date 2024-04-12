'use strict';

const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');
const fs = require('fs');

const getViewUrl = (url) => {
    return `views${url}.html`
}

// routing to the relevant folder and file we will give as a response
const routesMap = {'/': 'views/index.html'};

http.createServer((req, res)=> {
    res.writeHead(httpStatus.OK, {
        'content-Type': 'text/html'
    });
    if (routesMap[req.url]) {
        fs.readFile(routesMap[req.url], (error, data)=>{
            if (error){
                // in the event the request url is not found
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR);
                res.end();
                return;
            }
            res.write(data);
            res.end();
        });


    } else {
        res.end("<h1>Sorry, not found.</h1>");
    }
}).listen(port);
console.log('Listening in on port ' + port);