'use strict';

let courses = [
    {
    title: "Event Driven Cakes",
    cost: 50
    },
    {
    title: "Asynchronous Artichoke",
    cost: 25
    },
    {
    title: "Object Oriented Orange Juice",
    cost: 10
    }
];

exports.showSignUp = (req, res) => {
    res.render('contact');
};

exports.postedSignUpForm = (req, res) => {
    res.render('thanks');
};

exports.showCourses = (req, res) => {
    res.render('courses', { offeredCourses: courses });
};