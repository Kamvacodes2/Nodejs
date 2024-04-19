'use strict';

const httpStatus = require('http-status-codes');

//adding middleware to handle errors
exports.logErrors = (error, req, res, next) => {
    console.error(error.stack);
    next(error);
};

// adding custom message lettting user know of specific error type
// not found results in the 404 ERROR

exports.responseNoResourceFound = (req, res)=> {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    // res.send(`${errorCode} | The page does not exist!`) // rendering the plain text error code
    res.sendFile(`./public/${errorCode}.html`); // rendering a file instead of plain text
    root: "./"
};


// Catch all errors and respond with a 500 status code
exports.respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`Error Occurred: ${errorCode}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
};