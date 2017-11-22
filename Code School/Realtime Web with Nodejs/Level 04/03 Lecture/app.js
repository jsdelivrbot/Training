// 01
// var http = require('http');

// var myRequest = function(message) {
//   var request = http.request('http://codeschool.com', function(response) {
//     response.pipe(process.stdout, { end: false });
//   });

//   request.write(message);
//   request.end();
// };

// myRequest('Hello, this is dog.');


// 01 - end
// myRequest('Hello, this is dog.');   

// 03

var myRequest = require('./my_request');

myRequest('Hello, this is dog.');