// string
const name1 = "Jeff";
const name2 = new String('Jeff');
// could add a property to it because its an object
name2.foo = 'bar';
console.log(name2);

console.log(typeof name1);
console.log(typeof name2);
// if(typeof name1 === typeof name2){
if(name2 === 'Jeff'){
    console.log("Equal");
} else {
    console.log("Not Equal");
}


// numbers

const num1 = 5;
console.log(typeof num1);
const num2 = new Number(5);
console.log(typeof num2);

// boolean

const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool1);
console.log(typeof bool2);

// Function
const getSum1 = function(x, y){
    return x + y;
}

console.log(typeof getSum1(1, 1));

const getSum2 = new Function("x", "y", "return x + y")
console.log(typeof getSum2(1, 3));

// objects

const john1 = {
    name: "John"
}
console.log(typeof john1);
const john2 = new Object({name: "John"})
console.log(typeof john2);

//Arrays

const arr1 = [ 1, 2, 3, 4 ];
const arr2 = new Array( 1, 2, 3, 4 );

console.log(typeof arr1);
console.log(typeof arr2);

// RegEx

const re1 = /\w+/;
// have to escape for backslash in new construtor
const re2 = new RegExp('\\w+')

console.log(re1);
console.log(re2);