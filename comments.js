// create web server
var express = require('express');
var app = express();

// create route for root
app.get('/', function(req, res) {
    // res.send('this is the homepage');
    // render the homepage
    res.render('index');
});

// create route for comments
app.get('/comments', function(req, res) {
    // res.send('this is the comments page');
    res.render('comments');
});

// export this module
module.exports = app;