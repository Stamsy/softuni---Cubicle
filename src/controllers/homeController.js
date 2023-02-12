const db = require('../db.json');

exports.getHomePage = (req, res) => {
    res.render('index', { cubes: db.cubes });// to the index file we pass all the cubes recorded in db.json
};

exports.getAboutPage = (req, res) => {
    res.render('about');
};