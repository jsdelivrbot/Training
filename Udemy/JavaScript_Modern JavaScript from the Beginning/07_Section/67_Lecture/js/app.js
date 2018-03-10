// const sayHello = function(){
//     console.log('Hello');
// }

// const sayHello = () => {
//     console.log('Hello');
// }

// because one line - does not need braces
// const sayHello = () => console.log('Hello');

// one line return
// const sayHello = () => 'Hello';

// old style same as onel ine return
// const sayHello = function(){
//     return 'Hello';
// }

// trouble with object literal
// undefined
// const sayHello = () => { msg: 'Hello' };
// wrap in parens to fix - return Object
// const sayHello = () => ({ msg: 'Hello' });

// const sayHello = (name) => console.log(`Hello ${name}`);
// single param needs no parens
// const sayHello = name => console.log(`Hello ${name}`);

// error - missing initializer in const declaration
// const sayHello = firstName, lastName => console.log(`Hello ${firstName} ${lastName}`);

// fixed!  more than one params needs parens
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);


// sayHello();
// console.log(sayHello());
// sayHello('Seth');
// sayHello('Seth', 'Borne');


// Arrow Functions as callbacks
const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name){
//     // returns an array
//     return name.length;
// })

// const nameLengths = users.map((name) => {
//     return name.length;
// });

const nameLengths = users.map(name => name.length);

console.log(nameLengths);