let val;

// 01 -  number to string

// val = 5;
// convert to string
val = String(5)
// convert an expression
val = String(4 + 4)
// convert a boolean
val = String(true)
// date
val = String(new Date())
// array
val = String([1, 2, 3, 4])
// toString
val = (5).toString();
// boolean
val = true.toString();

// string to number 
val = Number('5');
// boolean to number (false)
val = Number(false);
// boolean to number (true)
val = Number(true);
// null to num
val = Number(null);
// string to number
val = Number('hello');
// array to number
val = Number([1, 2, 3, 4]);

// parseInt

val = parseInt("100");
val = parseInt("100.30");
// need float for dec
val = parseFloat("100.30");



// output
console.log(val);
console.log(typeof val);

// .length is a string property
// console.log(val.length);

console.log(val.toFixed());
// to 2 decimals
// console.log(val.toFixed(2));

// coercion

// type coercion
// const val1 = 5;
const val1 = String(5);
const val2 = 6;
const sum = parseInt(val1) + val2;

console.log(sum);
console.log(typeof sum);

