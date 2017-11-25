var express = require('express');
var app = express();

// 01

// app.get('/tweets', function(req, res){
    
// });

// 02

app.get('/tweets', function(req, res){
    res.sendFile(__dirname + "/tweets.html");
});

// 03

app.listen(8080);