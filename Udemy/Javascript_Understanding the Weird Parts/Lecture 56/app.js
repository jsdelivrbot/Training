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

// reflection
// for in - loop across a collection

// gets all - properties and anything on the prototype

for(var prop in john){
    console.log(prop + ": " + john[prop]);
}


for(var prop in john){
    // hasOwnProperty will check if its on the object( true) or exclude on the proto
    if(john.hasOwnProperty(prop)){
        console.log(prop + ": " + john[prop]);
    }
}

var jane = {
    address: "111 Main Str.",
    getFormalFullName: function(){
        return this.firstname + " " + this.lastname;
    }
    
}

var jim = {
    getFirstName: function(){
        return firstname;
    }
}

_.extend(john, jane, jim);

console.log(john);