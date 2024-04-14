'use strict';

const fs = require('fs')
const httpStatus = require('http-status-codes');
const contentTypes = require('./contentTypes');

// export object that contains the getFile function
//? function will look for file at provided path
//? if file doesn't exist it will immediately return the error message
module.exports = {
    getFile: (file, res)=>{
        fs.readFile(file, (error, data)=>{
            if (error){
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
                res.end("There was an error serving content!");
            }
            res.end(data);
        });
    }
};