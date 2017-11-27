// working with lists 1

var redis = require('redis');
var client = redis.createClient();

var question1 = "Where is the dog?";
var question2 = "Where is the cat?";

// 01
client.lpush('questions', question1, function(error, value){
    console.log(value);
});
// 02
client.lpush('questions', question2, function(error, value){
    console.log(value);
});