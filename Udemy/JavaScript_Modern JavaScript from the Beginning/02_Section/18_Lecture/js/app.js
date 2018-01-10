// Loops

// FOR LOOPS
for(let i = 0; i < 10; i += 1){
    if(i === 2){
        console.log("My Favorite Number " + i);
        continue;
    }
    if(i === 5){
        console.log("Stop");
        break;
    }
    console.log(i);
}

// WHILE
let i = 0;
while(i < 10){
    console.log("Number " + i);
    i += 1;
}

// DO WHILE
// will always run once no matter what
let j = 100;
do {
    console.log("Number " + j);
    j += 1;
}
while(j < 10)

// loop arrays
const cars = ["Ford", "Chevy", "Honda", "Toyota"];

// for(let i = 0; i < cars.length; i += 1){
//     console.log(cars[i]);
// }

// cars.forEach((car) => console.log(car));
cars.forEach((value, index) => console.log(index + " : " + value));


// MAP - return a different array

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Sara' },
    { id: 3, name: 'Karen' },
]

const ids = users.map((user) => console.log(user.id));

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
    console.log(x, user[x]);
}