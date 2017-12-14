// takes argument
const addSuffix = (x) => {
    const concat = (y) => {
        return y + x;
    }
    return concat
}

let addNess = addSuffix("ness");

console.log(addNess);

let happi = addNess("Happi")

console.log(happi);

let addFul = addSuffix("ful");
let fruit = addFul("fruit");

console.log(fruit);


// return a function that multiplies two variables

// const product = (x) => {
//     return y => {
//         return y * x;
//     }
// }

// Shorten

const product = (x) => y => y * x;

// let muliplyBy5 = product(5);
// console.log(muliplyBy5(3));

let muliplyBy2 = product(2);
console.log(muliplyBy2(9));