// object literal
// this is the same as var person = new Object();

var Tony = {
    firstname: "Tony",
    lastname: "Alicea",
    address: {
        street: "111 Main St",
        city: "New York",
        state: "NY"
    }
};

function greet(person){
    console.log("Hi " + person.firstname);
}

greet(Tony);
// console.log(person);

// pass Object on teh Fly
greet({firstname: "Mary", lastname: "Doe"});

Tony.address2 = {
    street: "333 Second Street",
    city: "Newark", 
    state: "NJ"
}

console.log(Tony);