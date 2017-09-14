// by value (primitives)

var a = 3;
var b;

b = a;

// predict
// a and b = 3
// but sep. memory spaces...

// so now set a to something else
a = 2;

// b = 3
// a = 2

console.log(a);
console.log(b);

// by reference (all objects(including functions))
// once you change one you change them all!

var c = { greeting: "hi"};
var d = c;

d = c;

// predict
// c and d = object
// c or d.greeting = "hi"

// what happens when you change c or d?

c.greeting = "hello";

// will be same, hello for each

console.log(d);
console.log(c);
console.log(d.greeting);
console.log(c.greeting);

// by reference (even as parameters)

function changeGreeting(obj){
    obj.greeting = "Hola;"
}

changeGreeting(d);

console.log(c);
console.log(d);

// equals set up new space in memory

c = { greeting: "howdy" };
// c no long pointing to the same space in memory - new object created on the fly by syntax.
console.log(c);
console.log(d);

// all primatives by value
// all objects/functions by reference