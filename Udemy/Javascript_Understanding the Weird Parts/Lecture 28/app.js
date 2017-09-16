function greet(name) {
    name = name || '<Your Name Here>'
    console.log('Hello ' + name);
}

// greet('Seth');
// Hello Seth
// greet();
// Hello undefined

// how to set name to a default value
// greet();

// return tests
console.log(true || false);
// true
console.log(undefined || 'hello');
// hello
//returns the value that be cohersed to true
console.log(undefined || false);
// false
console.log(0 || 1);

// or value special behavior
// if you pass two values to it that could be coehersed to true or false - it will return the first true

// operators are functions that return values