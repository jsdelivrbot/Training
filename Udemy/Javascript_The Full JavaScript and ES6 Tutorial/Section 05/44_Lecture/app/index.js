// let z = [4, 5, 6];
// // let four = z[0];
// // let five = z[1];
// // console.log(four, five);

// let [four, five, six] = z;
// console.log(four, six);

// let animals = ["Simba", "Zazu", "Ed"];
// let [lion, bird] = animals;
// console.log(lion, bird);

// let king = {
//     name: "Mufasa",
//     kids: 1
// };
// // let name = king.name;
// // let kids = king.kids;
// let {name, kids} = king;
// console.log(name, kids);

let son = {
    name: "Simba",
    parents: 2
}
let name,parents;
({ name, parents } = son);
console.log(name, parents);