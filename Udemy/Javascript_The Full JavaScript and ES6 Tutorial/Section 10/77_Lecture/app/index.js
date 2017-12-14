// function* letterMaker(){
//     // introduces control flow - can pause and resume?
//     // how to make this
//     yield 'a';
//     yield 'b';
//     yield 'c';
// }

// let letterGen = letterMaker();

// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);

// generator that returns the next value;

function* countMaker(){
    let count = 0;
    // once over three, it will no longer return a value;
    while(count < 3){
        yield count += 1;
    }
}

let countGen = countMaker();
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);

// 