console.log("Starting Notes .js ...");

const fs = require('fs');

var addNote = (title, body) => {
    // console.log("Adding Note: ", title, body);
    var notes = [];
    var note = {
        title: title,
        body: body
    }
    
    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch(e) {
        console.log("No File Exists");
    }
    
    // check for duplicate titles
    var duplicateNotes = notes.filter((note) => {
        // if equal, then it will return true
        return note.title === title;
    })
    
    if(duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    } else {
        console.log("Duplicate Title Detected, Note will Not be Added.");
    }
    
};

var getAllNotes = () => {
    console.log('Getting All Notes');
}

var getNote = (title) => {
    console.log('Getting Note with Title: ', title);
}

var removeNote = (title) => {
    console.log('Removing Note with Title: ', title);
}

module.exports = {
    addNote: addNote,
    getAllNotes: getAllNotes,
    getNote: getNote,
    removeNote: removeNote
}