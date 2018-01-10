// Function Declarations

// function greet(firstName, lastName){
// ES6 defaults
function greet(firstName = 'John', lastName = 'Doe'){
    // defaults
    // if(typeof firstName === 'undefined'){
    //     firstName = "John"
    // }
    // if(typeof lastName === 'undefined'){
    //     lastName = "Doe"
    // }
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet("Seth", "Borne"));
console.log(greet());


// Function Expressions

const square = function(x = NaN){
    return x*x;
}

let square1 = square();

if(isNaN(square1)){
    console.log("Invalid Input");
}
else {
    console.log(square1 + ' log');
}

// IIFEs

(function(name){
    console.log("Hello " + name);
})('Brad');

// Property methods

const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();