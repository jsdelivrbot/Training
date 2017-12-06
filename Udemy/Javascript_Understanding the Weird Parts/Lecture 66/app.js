var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // weird!
// console.log(d.toString()); // empty string
console.log(Object.prototype.toString.call(d)); // better!  call is invoke the function - but spec the prototype

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
// if anywhere down the prototye chain you find person
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever...

var z = function() { };
console.log(typeof z);

