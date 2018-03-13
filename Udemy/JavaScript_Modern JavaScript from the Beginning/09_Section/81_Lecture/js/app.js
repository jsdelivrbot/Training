let re;

// set my regex
// regex literal - enclosed in two forward slashes /inhereisregexliteral/
// re = /hello/; 
re = /hello/i; 

console.log(re);
console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec('brad hello world');
// const result = re.exec('hi world');
// console.log(result);


// test() = return true or false if there is a match
// const result = re.test('Hello')
// console.log(result);

// match() - Return result array or null
// const str = 'Hello There';
// // const str = 'Hell There';
// const result = str.match(re);
// console.log(result);

// search() = Returns index of the first match if not found returns -1
// const str = 'Brad Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - return a new string with some or all matches of a pattern
const str = 'Hello There';
// replace hello with hi
const newStr = str.replace(re, 'Hi');
console.log(newStr);
