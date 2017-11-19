var http = require('http');
var portNumber = 8080;

http.createServer(function(request, response) {
    response.writeHead(200);
    response.write("Hello, this is Seth");
    response.end();
}).listen(portNumber);

console.log(`Listening on Port ${portNumber}`);