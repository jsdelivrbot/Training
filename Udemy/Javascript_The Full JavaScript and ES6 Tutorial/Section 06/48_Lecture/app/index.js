// let values = [ 20, 30, 40];

// // let double = (n) => {
// //     return n * 2;
// // }

// // let doubled = values.map(double);

// let doubled = values.map((n) => n * 2);

// console.log(doubled);

let points = [7, 16, 21, 4, 3, 22, 5];

let highScores = points.filter((n) => n > 15 );

console.log(highScores);