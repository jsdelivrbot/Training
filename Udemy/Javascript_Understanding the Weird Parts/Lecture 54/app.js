var person = {
    firstname: "Seth",
    lastname: "Borne",
    getFullName: function(){
        return this.firstname + " " + this.lastname;
    }
}

var john = {
    firstname: "John",
    lastname: "Doe"
}

// don't do this in real life!

john.__proto__ = person;

console.log(john.getFullName());
console.log(john.firstname);

var jane = {
    firstname: "Jane"
}

jane.__proto__ = person;

console.log(jane.getFullName());