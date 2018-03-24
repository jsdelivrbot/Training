// var obj = {
//     name: "Seth"
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Andrew", "age": 25}'
// // console.log(personString["name"]);
// personString = JSON.parse(personString);
// console.log(typeof personString);
// console.log(personString["name"]);
// console.log(personString.name);

const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Somebody'
}

// originalNoteString
var originalNoteString = JSON.stringify(originalNote);
// write file to filesystem
fs.writeFileSync('notes.json', originalNoteString)

// read fs

var noteString = fs.readFileSync('notes.json');

// take string convert back to obj
// note
var note = JSON.parse(noteString);


console.log(typeof note);
console.log(note.title);