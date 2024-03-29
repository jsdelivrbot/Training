var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function (client) {
    console.log("Client connected...");

    client.on('question', function (question) {
        // 03
        if(!client.question_asked){
            // 01
            client.question_asked = true;
            client.broadcast.emit('question', question);
        }
    });
});

server.listen(8080);