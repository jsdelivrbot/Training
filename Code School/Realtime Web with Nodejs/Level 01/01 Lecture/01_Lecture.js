var http = require('http');
var portNumber = 8080;

// http.createServer(function(request, response){
//     response.writeHead(200);
//     response.write("Hello, this is DogBert");
//     response.end();
// }).listen(portNumber);

// console.log(`Listening on port ${portNumber}`);

// first registers know events

// looks for a request

// checks for events

// more complicated code

http.createServer(function(request, response){
    response.writeHead(200);
    response.write("Dog is running. ");
    setTimeout(function() {
        response.write("Dog is done.");
        response.end();
    }, 5000);
}).listen(portNumber);
console.log(`Listening on port ${portNumber}`);