var express = require('express');
var app = express();
// 01
var server = require('http').createServer(app);
// 02
var io = require('socket.io')(server);

// 03
io.on('connection', function(client){
    // 04
    console.log("Client has Connected.");
});

// 05
server.listen(8080);