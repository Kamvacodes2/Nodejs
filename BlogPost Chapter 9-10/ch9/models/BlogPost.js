const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema ({
    title: String,
    body: String,
    username: String,
    datePosted: {
        type: Date,
        default: new Date()
    },
    image: String
});

//mongo will automatically look for the plural form name of our db i.e BlogPosts Collection in of BlogPost
const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
module.exports = BlogPost // you can only export one variable