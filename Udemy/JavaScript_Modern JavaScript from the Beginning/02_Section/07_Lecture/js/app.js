// PRIMITIVES

// String

const name = 'John Doe';

// Number
const age = 45;

// Boolean
const isTrue = true;

// null - this is an BUG!
const checkMe = null;

// Undefined
let test;

// Symbol
const sym = Symbol();

console.log(typeof name);
console.log(typeof age);
console.log(typeof isTrue);
console.log(typeof checkMe);
console.log(typeof test);
console.log(typeof sym);

const hobbies = ['movies', 'music'];

console.log(typeof hobbies);

const address = {
    city: "Boston",
    state: "MA"
}

console.log(typeof address);

const today = new Date();
console.log(typeof today);