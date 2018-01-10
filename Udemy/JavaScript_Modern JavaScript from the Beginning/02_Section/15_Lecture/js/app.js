const id = 100;
// let id;

if(id == 100){
    console.log("Equal");
} else {
    console.log("Not Equal");
}

// NOT EQUAL

if(id != 101){
    console.log("Not Equal to 101");
}

if(id === 100){
    console.log("Correct");
} else {
    console.log("Not Correct");
}

if(typeof id !== 'undefined'){
    console.log(`The ID is ${id}`);
}
else {
    console.log("No Id");
}

// LOGICAL OPERATORS

// AND

const name = "Steven";
const age = 24;

if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR

if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// ternary

console.log(id === 100 ? 'CORRECT' : 'INCORRECT');