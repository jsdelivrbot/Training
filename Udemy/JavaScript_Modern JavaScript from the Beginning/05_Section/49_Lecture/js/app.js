class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}!`;
    }
    static addNumbers(x, y){
        return x + y;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        // this allows you to get parent class constructor
        super(firstName, lastName);
        
        this.phone = phone;
        this.membership = membership;
    }
    static getMembershipCost(){
        return 500;
    }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john);
console.log(john.greeting());
console.log(Customer.addNumbers(1, 2));
console.log(Customer.getMembershipCost());
// this wont work, because Customer extends Person, not the other way around
// console.log(Person.getMembershipCost());