
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
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        // console.log("Note Title: ", note.title, " | Note Body: ", note.body);
        notes.logNote(note);
    } else {
        console.log("ERROR:  No Note Returned.  Duplicate Title.  Please Check Revise Your Note and Submit Again.");
    }
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
    var note = notes.getNote(argv.title);
    if(note){
        notes.logNote(note);
    } else {
        console.log("No Note with Specified Title was Found.  Please Revise your Note Title and Submit Again");
    }
}
// remove
else if(command === 'remove'){
    // console.log("Removing Note");
    // title
    // console.log(notes.removeNote(argv.title));
    let removedNote = notes.removeNote(argv.title);
    let message = removedNote ? "Note Was Removed" : "Note Not Found"
    console.log(message);
}
else {
    console.log("Command Not Recognized");
}