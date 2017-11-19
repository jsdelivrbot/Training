// var fs = require('fs');

// var contents = fs.readFileSync('index.html');
// console.log(contents);

var fs = require('fs');

fs.readFile('index.html', function(err, contents){
    console.log(contents);
});