console.log("Starting Notes .js ...");

var addNote = (title, body) => {
    console.log("Adding Note: ", title, body);
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