var url = require('url');
var request = require('request');
// 01
var express = require('express');
// end 01
// 02
var app = express();
// end 02

//03
app.get('/', function(req, res){
    
    var options = {
        protocol: "http:",
        host: "search.twitter.com",
        pathname: '/search.json',
        query: {
            q: "codeschool"
        }
    };
    
    var searchURL = url.format(options);
    // 04
    request(searchURL).pipe(res);
    // end 04
    
});
// end 03

var app; // Create server here

// 05
app.listen(8080);