// recent messages

io.sockets.on('connection', function(client){
    // how to store messages?
    // var storeMessage = function(name, data){
    //     // takes message with name and data
    //     messages.push({ name: name, data: data })
    //     // if more than 10 messages, then get rid of the first (earliest) one
    //     if(messages.length > 10){
    //         messages.shift();
    //     }
    // }
    // need to rewrite storeMessage to use redis
    var redisClient = redis.createClient();
    var storeMessage = function(name, data){
        var message = JSON.stringify({ name: name, data: data });
        redisClient.lpush('messages', message, function(err, response){
            // newest 10
            redisClient.ltrim('messages', 0, 9);
        });
    }
    
    
    // on join
    client.on('join', function(name){
        // so when someone joins, emit the messaes that are stored
        // messages.forEach(function(message){
        //     client.emit('messages', message.name + ": " + message.data);
        // });
        // modify above messages.forEach for redis
        redisClient.lrange('messages', 0, -1, function(err, messages){
            // reverse do emitted in the correct order
            messages = messages.reverse();
            messages.forEach(function(message){
                // parse into JSON object
                message = JSON.parse(message);
                // emit to everone
                client.emit('message', message.name + ": " + message.data);
            })
            
        })
        // notify others a chatter has joined
        client.broadcast.emit('add chatter', name);
        // if chatters already exist, then list them()'
        redisClient.smembers('names', function(err, names){
            names.forEach(function(name){
                // emit all the currently logged in chatters to the newly connected client
                client.emit('add chatter', name);
            });
        });
        // add name to the set
        redisClient.sadd('chatters', name);
        // setting nick
        client.set('nickname', name);
        // who joined?
        client.broadcast.emit('chat', name + " joined the chat");
    });
    // new messgae
    client.on('messages', function(message){
        
        client.get('nickname', function(error, name){
            // emit to all
            client.broadcast.emit('messages', name + ": " + message);
            // emit back to user
            client.emit('messages', name + ": " + message);
            // after emitting message, store 
            storeMessage(name, message);
        });
    });
    
    client.on('disconnect', function(name){
        client.get('nickname', function(err, name){
            client.broadcast.emit('remove chatter', name);
            redisClient.srem('chatters', name);
        });
    });
});


var redis = require('redis');
var client = redis.createClient();

client.set("message1", "hello, this is dog");
client.set("message2", "hello, no this is spider");

// out

client.get("message1", function(err, reply){
    console.log(reply);
});

// redis list - pushing new value

var message = "Hello, this is another animal";
client.lpush('messages', message, function(err, reply){
    // this will reply with the string length;
    // console.log(reply);
    // using lpush/ltrim
    client.ltrim('messages', 0, 1);
});
client.lrange('messages', 0, -1, function(err, messages){
    // replies with all strings in list
    console.log(messages);
});