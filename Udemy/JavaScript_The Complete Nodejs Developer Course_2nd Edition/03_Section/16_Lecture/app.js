
// Start App.js
console.log("App .js Starting...");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
console.log("notes: ", notes);

// var command = process.argv[2];

const argv = yargs.argv;

var command = argv._[0];
console.log('Command: ', command);

console.log("yargs");
console.log(argv);

console.log(process.argv);

if(command === 'add'){
    // console.log("Adding New Note");
    notes.addNote(argv.title, argv.body);
}
else if(command === 'list'){
    // console.log("Listing All Notes");
    notes.getAllNotes();
    // return all notes
}
//read
else if(command === 'read'){
    // console.log("Reading Note");
    // title
    notes.getNote(argv.title);
}
// remove
else if(command === 'remove'){
    // console.log("Removing Note");
    // title
    notes.removeNote(argv.title);
}
else {
    console.log("Command Not Recognized");
}