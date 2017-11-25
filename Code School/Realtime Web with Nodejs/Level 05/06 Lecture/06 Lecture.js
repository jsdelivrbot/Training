// 01
var request = require('request');
// end 01
var url = require('url');

var options = {
    protocol: "http:",
    host: "search.twitter.com",
    pathname: '/search.json',
    query: { q: "codeschool" }
};

var searchURL = url.format(options);
// 02
request(searchURL, function(error, response, body){
    console.log(body);
});
// end 02