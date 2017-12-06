class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet(){
        return 'Hi ' + this.firstName;
    }
}

var seth = new Person('Seth', 'Borne');
console.log(seth.greet());

class InformalPerson extends Person {
    constructor(firstName, lastName){
        super(firstName, lastName);
    }
    greet(){
        return 'Yo ' + this.firstName;
    }
}

var seth = new InformalPerson('Seth', 'Borne');
console.log(seth.greet());