"use strict";


// creating a schema that provides an order to our database
// define the schema properties
const mongoose = require("mongoose"),
  subscriberSchema = mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number
  });

module.exports = mongoose.model("Subscriber", subscriberSchema);


// how to create a subscriber 

// var subscriber1 = new Subscriber({
//   name: "Jon Wexler",
//   email: "jon@jonwexler.com"
//  });
//  subscriber1.save((error, savedDocument) => {
//   if (error) console.log(error);
//   console.log(savedDocument);
//  });

//? OR /////////////////////////////////////////////////////////////////////////////////////////////////
//  Subscriber.create(
//   {
//   name: "Jon Wexler",
//   email: "jon@jonwexler.com"
//   },
//   function (error, savedDocument) {
//   if (error) console.log(error);
//   console.log(savedDocument);
//   }
//  ); 