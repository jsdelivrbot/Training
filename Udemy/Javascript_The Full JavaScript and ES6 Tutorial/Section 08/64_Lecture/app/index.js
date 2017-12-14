// let newSet = new Set();
// newSet.add(5);
// newSet.add(42);
// newSet.add("String")
// newSet.add({x: 50, y: 100});
// console.log(newSet.has(15));

// let numbers = [ 5, 7, 9, 13, 17, 5, 7, 9, 13, 17 ];
// let numSet = new Set(numbers);
// console.log(numSet);

// // enhanced for loop

// for(let element of numSet.values()){
//     console.log(element);
// }

let chars = ";alksdjf;fjoiweoia;lsdnf;oaiwehf;aowjn;aksdg  vn .kru atfhp;OJIE;FNALKSDNV;AOSEHF";
let charsArr = chars.split("");
let charsSet = new Set(charsArr);
console.log(charsSet);