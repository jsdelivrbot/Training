var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function (client) {
    console.log("Client connected...");
    // 01
    client.on('question', function(data){
        // 02
        client.broadcast.emit('question', data);
    });
});

server.listen(8080);