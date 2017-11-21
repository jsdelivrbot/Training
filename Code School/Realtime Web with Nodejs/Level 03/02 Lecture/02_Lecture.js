// var fs = require('fs');

// 01

var fs = require('fs');

var file = fs.createWriteStream('fruits.txt');

// 02

var fs = require('fs');

var file = fs.createReadStream('fruits.txt');
    
file.on('readable', function(){
        
});

// 03

var fs = require('fs');

var file = fs.createReadStream('fruits.txt');

file.on('readable', function () {
    var chunk = null;
    while (null !== (chunk = file.read())) {
        console.log(chunk.toString());
    }
});