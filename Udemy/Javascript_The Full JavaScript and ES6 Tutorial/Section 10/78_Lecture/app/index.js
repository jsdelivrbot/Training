function* letterMaker() {
    // TODO add yields
    yield 'x';
    yield 'y';
    yield 'z';

}

let letterGen = letterMaker();

// // dont need these for some reason?
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);