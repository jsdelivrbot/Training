// 01

// var fs = require('fs');

// var file = fs.createReadStream('fruits.txt');

// file.on('readable', function () {
//     var chunk;
//     while (null !== (chunk = file.read())) {
//         console.log(chunk.toString());
//     }
// });

var fs = require('fs');

var file = fs.createReadStream('fruits.txt');

file.on('', function () {
    var chunk;
    while (null !== (chunk = file.read())) {
        console.log(chunk.toString());
    }
});

// 02

var fs = require('fs');

var file = fs.createReadStream('fruits.txt');

file.pipe(process.stdout);