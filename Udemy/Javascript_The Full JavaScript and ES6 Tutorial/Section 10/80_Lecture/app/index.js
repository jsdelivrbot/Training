// const arrayIterator = (array) => {
//     // starting point
//     let index = 0;
//     // return object from iterator that maps to arrow func
//     return {
//         next: () => {
//             if(index < array.length){
//                 let next = array[index];
//                 index += 1;
//                 return next;
//             }
//         }
//     }
// }

// let it = arrayIterator([1, 2, 3]);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// function* arrayIterator(){
//     yield arguments;
// }

// function* arrayIterator(){
//     for(let arg of arguments){
//         yield arg;
//     }
// }

function* arrayIterator(){
    yield* arguments;
}

var it = arrayIterator(1, 2, 3);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

