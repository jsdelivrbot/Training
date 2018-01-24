// constructor
// creating the book object

function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// ui constructor
// set of prototype methods for the ui

function UI(){
    
}

UI.prototype.addBookToList = function(book){
    // console.log(book);
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // apend cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">&times;</a></td>
    `
    // console.log(row);
    // add row to table
    list.appendChild(row)
}

UI.prototype.clearFields = function(){
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
}

UI.prototype.showAlert = function(message, className){
    const div = document.createElement('div');
    // add class
    div.className = `alert ${className}`;
    // Add Text
    div.appendChild(document.createTextNode(message));
    // get parent for insert
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form)
    
    // timeout
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 4000);
}

// event Listerners
document.getElementById('book-form').addEventListener('submit', function(event){
    // console.log("test");
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value
    // console.log(title, author, isbn);
    
    // instantiate book 
    const book = new Book(title, author, isbn);
    console.log(book);
    
    // instantiate ui
    const ui = new UI();
    
    // validate
    if(title === '' || author === '' || isbn === ''){
        // alert('Failed');
        // error in browser
        ui.showAlert('Please Fill in All Fields', 'error');
    } else {
        // console.log(ui);
        
        // Add Book to List
        ui.addBookToList(book);
        
        // successfully Added book;
        ui.showAlert('Book Added!', 'success')
        
        // clear fields
        ui.clearFields();
    }
    
    
    event.preventDefault();
})