const firstName = "Seth";
const lastName = "Borne";
const age = 36;

// init val

let val;

val = firstName + lastName;
// concat with space
val = firstName + " " + lastName;

// appending a string
val = "Tim"
val += " "
val += "Guy"

// sentance with variables

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// template literals
// I think thats the ` with ${var} `

// Escaping
val = "That's awesome, I can't wait";
// without double (\) - escape the quote 
val = 'That\'s awesome, I can\'t wait';

// properties and methods

val = firstName.length;
val = lastName.length;

// concat method
val = firstName.concat(" ", lastName)
// upper or lower
val = firstName.toUpperCase();
val = lastName.toLowerCase();
// string like array

val = firstName[0];
val = firstName[2];

// indexOf (find char)

val = firstName.indexOf('t');
val = firstName.lastIndexOf('t')

// charAt (find Char)
// if not there, -1
val = firstName.charAt(3);

// get last char
val = firstName.charAt(firstName.length - 1);

// get substrings
val = firstName.substring(0, 3);

// slice (mostly arrays)
val = firstName.slice(0, 2)
val = firstName.slice(-3);

// split ()
val = firstName.split("");
val = firstName.concat(" ", lastName);
val = val.split(" ")

// replace
val = firstName.concat(" ", lastName);
val = val.replace('Seth', 'Man')

// includes (boolean)
val = firstName.concat(" ", lastName);
val = val.includes('Seth')

// log
console.log(val);