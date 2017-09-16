// so now copy the two lower lines up  - whats the expect?
// Step 2
// would expect nothing - haven't gotten to the values yet.

// b();
// console.log(a);

// result - function runs (b())
// a is undefined - in console

// if you delete a - you get a a is not defined error in console

//hoisting



// var a = 'Hello World';

// function b(){
//     console.log('Called B');
// };

// Step 1
//expected result

// b();
// console.log(a);

// ALWAYS BETTER TO DO THIS WAY!!!!!!

//expect b call then 
//log a

// STEP 3
// undefined exercise

// var a;
// undefined
var a = 'hello world';
// a is defined
console.log(a);

// a = undefined;
// DONT DO THIS

if ( a === undefined) {
    console.log('a is undefined');
}
else{
    console.log('a is defined');
}