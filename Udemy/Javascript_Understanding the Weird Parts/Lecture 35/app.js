// expression

a = 3;
// set to memory

console.log(a);

1 + 2;

// would return 3, but not in memory


// statement(inside paraenthsis is expression)

if(a === 3){
    
}

// have function satement

// this goes to memory, the () invoke;
greet();
// invocking this function doesn't result in a value it just knows something is there


function greet(){
    console.log("hi");
}
//puts in memory but doesn't result in a value
// when execute it just runs the statement

// 1 function statement hoisted into memory on creation phase of execution context


// have function expression

// have object, no name because variable already knows where function lives in memory

// anonymousGreet();

var anonymousGreet = function(){
    console.log("hi2");
}

// everything after the = sign is an object when it executes, so it returns value

anonymousGreet();
// invoking this function expression, is expression because it returns

// 2 function expression here used as part of the equals operator here to set it equal to a variable then you can use that to invoke it

// FUNCTION ESPRESSIONS ARE NOT HOISTED!!


// fucntion statement

function log(a){
    // console.log(a);
    a();
}
// 3b - this function takes that parameter then invokes it

// log("Hello");
// log({
//     myName: "Is",
//     Slim: "Shady"
// })

log(function(){
    console.log("hi3");
})

// 3a - function expresssion that passes up as a parameter

// #3 concept allows for functional programming.