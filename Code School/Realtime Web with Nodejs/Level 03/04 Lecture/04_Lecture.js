// 01
// var fs = require('fs');

// var file = fs.createReadStream('origin.txt');
// var destFile = fs.createWriteStream('destination.txt');

// file.pipe(destFile);

// file.on('end', function () {
//     destFile.end('Finished!');
// });

var fs = require('fs');

var file = fs.createReadStream('origin.txt');
var destFile = fs.createWriteStream('destination.txt');

file.pipe(destFile, { end: false });

file.on('end', function () {
    destFile.end('Finished!');
});

// 02