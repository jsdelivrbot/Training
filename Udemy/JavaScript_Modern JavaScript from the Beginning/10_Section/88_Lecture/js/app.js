// create symbol

const sym1 = Symbol();

console.log(sym1);

// no two symbols can be the same.

const sym2 = Symbol('sym2');
console.log(sym2);

console.log(Symbol('123') === Symbol('123'));
console.log(`Hello ${sym1.toString()}`);

// why symbols?  Unique Object keys

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4'

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

console.log(myObj);

// Symbols are not enumerable in for...in

for(let i in myObj){
    console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored when using JSON stringify

console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));