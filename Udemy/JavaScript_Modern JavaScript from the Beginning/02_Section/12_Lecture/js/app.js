// some arrays
const numbers = [1, 2, 3, 4, 5, 6];
const numbers2 = new Array(10, 11, 12, 13, 14);
const fruit = ["apple", "banana", "orange", "pear"];
const mixed = [ 22, 'Hello', true, undefined, null, {a: 1, b: 2}, new Date()];

let val;

// get array length
val = numbers.length

// check if it is an array
val = Array.isArray(numbers);
// nonpe - string
val = Array.isArray("Temp");

// get value
val = numbers[2];

val = numbers[0];

// insert into arrays
numbers[2] = 100;

// find index of value
val = numbers.indexOf(5);

// MUTATE ARRAYS!
// ADD TO END  - push
numbers.push(250);

// Add to front
numbers.unshift(125);

// OFF back
numbers.pop();

// OFF Front
val = numbers.shift();

// splice from anywhere
val = numbers.splice(1, 1)

// more 
val = numbers.splice(1, 3);

// reverse
val = numbers.reverse();

// concat arrays

val = numbers.concat(numbers2)

// sort
val = fruit.sort();

// sort
val = numbers.concat(numbers2).sort();

// sort with compare
val = numbers.concat(numbers2).sort((x, y) => x > y)

// sort with compare (reverse)
val = numbers.concat(numbers2).sort((x, y) => x < y)

// find
val = numbers.find((num) => num > 0);

console.log(numbers);
console.log(val);
