// functions are objects
// can attach primitive, object or function
// 2 properties:  name (can have one, or be anonymous), code(invocable)

function greet(){
    console.log('hi');
}

// prop on function
greet.language = "english";

console.log(greet.language);
console.log(greet());