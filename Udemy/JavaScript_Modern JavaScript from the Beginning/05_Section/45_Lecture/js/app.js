// prototypes, not like classes
// each object have a prototype
// all objects inherit properties and methods frmo thier prototype

// Object Literals
// object.prototype

// constructor
// person.prototype

function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// first __proto__ - rep the Person

// this assigns the function to the person prototype
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

// gets Married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');

const mary = new Person('Mary', 'Johnson', 'March 20 1978');

mary.getsMarried('Smith')

console.log(mary.getFullName());

// second __proto__ - rep the object (base)
console.log(mary.hasOwnProperty('firstName'));
// ↓ this is going to return false - because the getFullName is attached to the Person prototype, not the object prototype.
console.log(mary.hasOwnProperty('getFullName'));