// SETS - Store unique values of any type

const set1 = new Set();

// Add values to set

set1.add(100);
set1.add('A String');
set1.add({name: 'John'});
set1.add(true);

console.log(set1);

const set2 = new Set([1, true, false, 'string']);
// console.log(set2);
console.log(set2.size);

// check for valuse

console.log(set1.has(100));
console.log(set1.has(50 + 50));
// console.log(set1.has({name: 'John'}));
// console.log({name: 'John'} === {name: 'John'});

// Delete from set
set1.delete(100);

console.log(set1);

// Iterate through sets

// for...of

for(let item of set1.keys()){
    console.log("here", item);
}

// ForEach Loop

set1.forEach((value) => {
    console.log(value);
})

// convert sets to an array
const setArr = Array.from(set1);

console.log(setArr);