// Start App.js
console.log("App .js Starting...");

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command: ', command);

console.log(process.argv);

if(command === 'add'){
    console.log("Adding New Note");
}
else if(command === 'list'){
    console.log("Listing All Notes");
}
//read
else if(command === 'read'){
    console.log("Reading Note");
}
// remove
else if(command === 'remove'){
    console.log("Removing Note");
}
else {
    console.log("Command Not Recognized");
}
