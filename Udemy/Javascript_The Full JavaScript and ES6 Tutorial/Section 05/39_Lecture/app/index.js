// console.log("Hello from Webpack - hello out there");

// var limit = 100;
// console.log(limit);

// let limit = 100;
// // console.log(limit);

// // limit += 100;
// limit = 200;
// console.log(limit);

// // let and var similar

const limit = 200;
// limit = 100;
console.log(limit);

// const limits redeclaration and reassignment
// but doesn't prevent us from manipulating data

const emails = ['first@email.com', 'second@email.com', 'third@email.com'];
// emails = [];
emails.push('fourth@email.com');
// if you have "=", const will probably throw an error
console.log(emails);

