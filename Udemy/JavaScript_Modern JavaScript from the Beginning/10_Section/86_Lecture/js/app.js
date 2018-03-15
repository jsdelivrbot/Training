// Iterator Example
// function nameIterator(names){
//     let nextIndex = 0;
//     // return object with next function
//     return {
//         next: function(){
//             return nextIndex < names.length ? { value: names[nextIndex++], done: false } : { done: true }
//         }
//     }
// }

// // array of names
// const namesArr = [ 'Jack', 'Jill', 'John' ];

// const names = nameIterator(namesArr);

// console.log(names.next());


//Generators - Functions that can return or "Yield" multiple values
// the * is what tells JS its a generator
// function* sayNames(){
//     yield 'Jack';
//     yield 'Jill';
//     yield 'John';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// ID Creator
function* createIds(){
    let index = 0;
    while(true){
        yield index++;
    }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);