const mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber"),
    Course = require("./models/course");

var testCourse, testSubscriber;

mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

Subscriber.remove({})
    .then(items => console.log(`Removed ${items.n} records!`))
    .then(() => {
        return Course.remove({});
    })
    .then(items => console.log(`Removed ${items.n} records!`))
    .then(() => {
        return Subscriber.create({
            name: "Jon",
            email: "jon@jonwexler.com",
            zipCode: "1234"
        });
    })
    .then(() => {
        return Subscriber.create({
            name: "Cupcake",
            email: "cupcake@gmail.com",
            zipCode: "6969"
        });
    })
    .then(() => {
        return Subscriber.create({
            name: "Freddie Mercury",
            email: "fred@queen.com",
            zipCode: "4269"
        });
    })
    .then(() => {
        return Subscriber.create({
            name: "Eben",
            email: "ebenj.van.rensburg@gmail.com",
            zipCode: "1195"
        });
    })
    .then(subscriber => {
        console.log(`Created Subscriber: ${subscriber.getInfo()}`);
    })
    .then(() => {
        return Subscriber.findOne({
            name: "Jon"
        });
    })
    .then(subscriber => {
        testSubscriber = subscriber;
        console.log(`Found one subscriber: ${subscriber.getInfo()}`);
    })
    .then(() => {
        return Course.create({
            title: "Tomato Land",
            description: "Locally farmed tomatoes only",
            zipCode: 1234,
            items: ["cherry", "heirloom"]
        });
    })
    .then(course => {
        testCourse = course;
        console.log(`Created course: ${course.title}`);
    })
    .then(() => {
        testSubscriber.courses.push(testCourse);
        testSubscriber.save();
    })
    .then(() => {
        return Subscriber.populate(testSubscriber, "courses");
    })
    .then(subscriber => console.log(subscriber))
    .then(() => {
        return Subscriber.find({
            courses: mongoose.Types.ObjectId(testCourse._id)
        });
    })
    .then(subscriber => console.log(subscriber));