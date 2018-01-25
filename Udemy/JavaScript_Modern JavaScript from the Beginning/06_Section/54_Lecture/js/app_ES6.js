// book function with constructor
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// ui function with constructor
class UI {
    addBookToList(book){
        const listElement = document.getElementById('book-list');
        
        const row = document.createElement('tr');
        // add table data HTML to the row
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">&times;</a></td>
        `
        // append the row to the list as a child
        listElement.appendChild(row);
    }
    deleteBook(target){
        // if target is the right class then remove()
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
    showAlert(message, className){
        // make div
        const div = document.createElement('div');
        // add class
        div.className = `alert ${className}`;
        // add text to div
        div.appendChild(document.createTextNode(message));
        // get parent for insert
        const container = document.querySelector('.container');
        // get top child for insert
        const form = document.querySelector('#book-form');
        // in container, insert div before form
        container.insertBefore(div, form);
        // auto clear after a certain amount of time
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 4000);
    }
    clearFields(){
        // to clear fields, get the value by ID and set them to empty string
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// eventListener for Add Book
// add listener
document.getElementById('book-form').addEventListener('submit', function(event){
    // set captures for values - book, author, isbn
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;
    
    // make a copy of the book to be added
    const book = new Book(title, author, isbn);
    // console.log(book);
    
    // instantiate ui
    const ui = new UI();
    console.log(ui);
    
    // add book if valid, if not (any have empty strings) throw an error
    if(title === '' || author === '' || isbn === ''){
        ui.showAlert('Submission Error: Invalid Input(s)', 'error');
    } else {
        ui.addBookToList(book);
        // show success message
        ui.showAlert('Book Successfully Added', 'success');
        // clear fields
        ui.clearFields();
    }
    
    // prevent default behavior of an html form
    event.preventDefault();
})

// add eventlistener for 
document.getElementById('book-list').addEventListener('click', function(event){
    const ui = new UI();
    // console.log(event);
    // deleteBook
    ui.deleteBook(event.target);
    // alert
    ui.showAlert('Book Removed', 'warn');
    // not sure what this does in this context...
    event.preventDefault();
})