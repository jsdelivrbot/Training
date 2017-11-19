var http = require("http");

var EventEmitter = require('events').EventEmitter;

// logger to do error warn info event
var logger = new EventEmitter();

logger.on('error', function(message){
    console.log('ERR: ' + message);
})
logger.emit('error', 'This is an Error');

http.createServer(function(request, response){
    
});

var server = http.createServer();
server.on('request', function(request, response){
    
});