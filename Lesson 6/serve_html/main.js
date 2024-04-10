
// const port = 3000,
//     http = require("http"),
//     httpStatus = require("http-status-codes"),
//     fs = require("fs");
// const routeMap = {
//     "/": "view/index.html"
// };
// http
//     .createServer((req, res) => {
//         res.writeHead(httpStatus.OK, {
//             "Content-Type": "text/html"
//         });
//         if (routeMap[req.url]) {
//             fs.readFile(routeMap[req.url], (error, data) => {
//                 res.write(data);
//                 res.end();
//             });
//         } else {
//             res.end("<h1>Sorry, not found.</h1>");
//         }
//     })
//     .listen(port);
// console.log(`The server has started and is listening on port number: ${port}`);

// 6.3 

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    fs = require("fs");
const sendErrorResponse = res => {
    res.writeHead(httpStatus.NOT_FOUND, {
        "Content-Type": "text/html"
    });
    res.write("<h1>File Not Found!</h1>");
    res.end();
};
http
    .createServer((req, res) => {
        let url = req.url;
        if (url.indexOf(".html") !== -1) {
            console.log("HTML:", url);
            res.writeHead(httpStatus.OK, {
                "Content-Type": "text/html"
            });
            customReadFile(`./view${url}`, res);
        } else if (url.indexOf(".js") !== -1) {
            console.log("JS:", url);
            res.writeHead(httpStatus.OK, {
                "Content-Type": "text/javascript"
            });
            customReadFile(`./public/js${url}`, res);
        } else if (url.indexOf(".css") !== -1) {
            console.log("CSS:", url);
            res.writeHead(httpStatus.OK, {
                "Content-Type": "text/css"
            });
            customReadFile(`./public/css${url}`, res);
        } else if (url.indexOf(".png") !== -1) {
            console.log("PNG:", url);
            res.writeHead(httpStatus.OK, {
                "Content-Type": "image/png"
            });
            customReadFile(`./public/images${url}`, res);
        } else {
            sendErrorResponse(res);
        }
    })
    .listen(3000);
console.log(`The server is listening on port number: ${port}`);
const customReadFile = (file_path, res) => {
    if (fs.existsSync(file_path)) {
        fs.readFile(file_path, (error, data) => {
            if (error) {
                console.log(error);
                sendErrorResponse(res);
                return;
            }
            res.write(data);
            res.end();
        });
    } else {
        sendErrorResponse(res);
    }
};


// const routeMap = {
//     "/": "view/index.html"
// };
