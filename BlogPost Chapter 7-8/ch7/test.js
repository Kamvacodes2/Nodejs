const mongoose = require('mongoose');

const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

// the code was not function because of the version of mongoose I had installed
// BlogPost.create({
//     title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
//     body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:'
// }, (error, blogpost) => {
//     console.log(error, blogpost);
// })


//find documents with a specific word /word/
//!
// BlogPost.find({
//     title:/The/
// },(error,blogpost)=>{
//     console.log(error,blogpost)
// })

let id = '6634abc4c6a687394815a230'

// BlogPost.findById(id, (error,blogpost)=>{
//     console.log(error, blogpost)
// });

//! Updating using findby
// BlogPost.findByIdAndUpdate(id, {
//     title: "Long Story Short"
// }, (error, blogpost)=>{
//     console.log(error, blogpost);
// });


//? Deleting documents from database
BlogPost.findByIdAndDelete(id, (error, blogpost)=>{
    console.log(error, blogpost);
});

