// create web server with express
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var formidable = require('formidable');

// get the comments file
var commentsFile = path.join(__dirname, 'comments.json');

// read the comments file
var comments = JSON.parse(fs.readFileSync(commentsFile, 'utf8'));

// write the comments file
function saveComments() {
    fs.writeFileSync(commentsFile, JSON.stringify(comments), 'utf8');
}

// get all comments
router.get('/comments', function(req, res) {
    res.json(comments);
});

// add a new comment
router.post('/comments', function(req, res) {
    var newComment = {
        id: Date.now(),