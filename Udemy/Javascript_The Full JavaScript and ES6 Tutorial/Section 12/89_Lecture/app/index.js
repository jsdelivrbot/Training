let obj = { a: 'one', b: 'two', c: 'three' }
// let keys = Object.keys(obj);
// console.log(keys);

// let values = Object.values(obj);
// console.log(values);

let entries = Object.entries(obj);
for(let entry of entries){
    console.log(`key: ${entry[0]}, value: ${entry[1]}`);
}
// console.log(entries);