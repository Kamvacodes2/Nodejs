'use strict';


exports.sendParams = (req, res)=> {
    let veg = req.params.vegetable;
    res.send(`This page is for ${veg}`);
};