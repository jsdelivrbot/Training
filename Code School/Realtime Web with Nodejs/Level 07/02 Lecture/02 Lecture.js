// 01
var redis = require('redis');
// 02
var client = redis.createClient();
// 03
client.set("name", "Seth");