// let newMap = new Map();
// let key1 = "string key";
// let key2 = { a: 'key' };
// let key3 = function(){};

// newMap.set(key1, 'return value for a string key');
// newMap.set(key2, 'return value for an object key');
// newMap.set(key3, 'return value for a function key')
// console.log(newMap);

// let numArr = [[1, 'one'], [2, 'two'], [3, 'three']];
// let valMap = new Map(numArr);

// for( let [key, value] of valMap.entries()){
//     console.log(`${key} points to ${value}`);
// }

// console.log(valMap);

// iterate 
// map() has a values, but thats just the second item (value)


let string = 'alksdjf;kalsfn[ijbpd;b,psdofj;aowekfn;aslkvndaosin';

let letters = new Map();

for(let i = 0; i < string.length; i += 1){
    let letter = string[i];
    if(letters.has(letter) === false){
        letters.set(letter, 1);
    }
    else {
        letters.set(letter, letters.get(letter) + 1);
    }
}

console.log(letters);