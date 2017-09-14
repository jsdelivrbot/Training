// function statement 

// function greet(name){
//     console.log("Hello " + name);
// }

// greet("John");

// function expression

// var greetFunc = function(name){
//     console.log("Hellow " + name)
// }

// greetFunc("Jose");


// an Immediately Invoked Function Expression (IIFE)

// 1.  (after equals) create function on the fly
// 2.  which accepts a parameter name
// var greeting = function(name){
    
    // console.log("Hell o " + name);
    // return "Hell o " + name;
    
// }("Seth");
// 3.  ("Seth") invokes "runs" this function, and passes parameter "Seth" to name immediataly after creating it
// 4.  this returns the string, which
// 5.  goes into var greeting, which gets passed to = operator

// console.log(greeting);



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

// var firstname = "Boop";
// (function(name){
(function(global, name){
    // return "Hello " + name
    // local to this function
    var greeting = "Hello"
    // this overrides global greeting
    global.greeting = "Hello"
    console.log(greeting + ' ' + name);
// }("Boop"));
}(window, "Boop"));

// var greeting = "hola";

console.log(greeting);

// wrap in parens so its an expression, not statement
// () invoke at end

// Execution Stack

// 2.  Then Sees ("John") - invokes - new execution context, then run by line by line [ sees first line var - which goes into that functions execution context variable environment (not global)  ]
// 1.  Global Execution stack - [Sees entire function , puts it in memory (object)]