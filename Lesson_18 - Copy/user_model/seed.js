"use strict";

const mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber");

mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    { useNewUrlParser: true }
);
mongoose.connection;

var contacts = [
    {
        name: "Jon Wexler",
        email: "jon@jonwexler.com",
        zipCode: 1234
    },
    {
        name: "Cupcake",
        email: "cupcake@gmail.com",
        zipCode: 6969
    },
    {
        name: "Freddie Mercury",
        email: "fred@queen.com",
        zipCode: 4269
    },
    {
        name: "Eben",
        email: "ebenj.van.rensburg@gmail.com",
        zipCode: 1195
    }
];

Subscriber.deleteMany()
    .exec()
    .then(() => {
        console.log("Subscriber data is empty!");
    });

var commands = [];

contacts.forEach(c => {
    commands.push(
        Subscriber.create({
            name: c.name,
            email: c.email,
            zipCode: c.zipCode
        })
    );
});

Promise.all(commands)
    .then(r => {
        console.log(JSON.stringify(r));
        mongoose.connection.close();
    })
    .catch(error => {
        console.log(`ERROR: ${error}`);
    });