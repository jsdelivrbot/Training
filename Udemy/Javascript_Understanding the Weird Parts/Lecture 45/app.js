// function statement 

function greet(name){
    console.log("Hello " + name);
}

greet("John");

// function expression

var greetFunc = function(name){
    console.log("Hellow " + name)
}

greetFunc("Jose");


// an Immediately Invoked Function Expression (IIFE)

// 1.  (after equals) create function on the fly
// 2.  which accepts a parameter name
var greeting = function(name){
    
    // console.log("Hell o " + name);
    return "Hell o " + name;
    
}("Seth");
// 3.  ("Seth") invokes "runs" this function, and passes parameter "Seth" to name immediataly after creating it
// 4.  this returns the string, which
// 5.  goes into var greeting, which gets passed to = operator

console.log(greeting);



//stand alone

// 3;
// "I am a string";
// {
//     name: "Seth"
// }

// errors needs a function name...
// this is function statement
// function (name){
//     return "hello " + name;
// }

// if function isn't the first word it isn't a problem.
// anything inside parens is expression
// for function expression

var firstname = "Boop";

(function(name){
    // return "Hello " + name
    var greeting = "IIFE: Hello"
    console.log(greeting + ' ' + name);
}(firstname));

// wrap in parens so its an expression, not statement
// () invoke at end