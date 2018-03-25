// var square = (x) => {
//     return x * x; 
// }

var square = x => x * x;
// don't need parens with one param
console.log(square(3));

// complex
var user = {
    name: 'Andrew',
    // dont use what is shown below
    sayHi: () => {
        console.log(arguments); 
        console.log(`Hi. I'm ${this.name}`); 
    },
    // use what is shown here - get both args and this (as you would expect)
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
}

// arrow functions do not use this
user.sayHi();
user.sayHiAlt();
// arrow functions do not bind the arguments array
user.sayHiAlt(1, 2, 3, 4);
