// person constructor
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}!`
}

const person1 = new Person('John', 'Doe');
console.log(person1.greeting());

function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}
// Inherit person __proto__ methods
Customer.prototype = Object.create(Person.prototype)
// make customer.prototype return customer()
Customer.prototype.constructor = Customer;

const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}! Welcome to our Company!`
}

console.log(customer1.greeting());

