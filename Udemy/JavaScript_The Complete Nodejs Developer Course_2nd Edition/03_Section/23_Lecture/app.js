
// Start App.js
// console.log("App .js Starting...");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
// console.log("notes: ", notes);

// var command = process.argv[2];
const titleOptions = {
    describe: 'Title of Note',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'Body of the Note',
    demand: true,
    alias: 'b'
}


// const argv = yargs.argv;
const argv = yargs
    .command('add', 'Add a New Note', {
        // options object
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List All Notes')
    .command('read', 'Read a Note', {
        title: titleOptions
    })
    .command('remove', 'Remove Note by Title', {
        title: titleOptions
    })
    .help()
    .argv;

var command = argv._[0];
// console.log('Command: ', command);

// console.log("yargs");
// console.log(argv);

// console.log(process.argv);

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
    // return all notes
    var allNotes = notes.getAllNotes();
    if(allNotes.length > 0){
        if(allNotes.length === 1){
            console.log(`Printing ${allNotes.length} note`);
        } else {
            console.log(`Printing ${allNotes.length} notes`);
        }
        allNotes.forEach((note, index) => {
            notes.logNote(note, index + 1)
        })
    } else {
        console.log("No Notes in Note Array");
    }
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