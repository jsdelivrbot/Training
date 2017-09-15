// call() apply() bind()

// has to do with how to use "this"

// function - special objec

    // has code
    // could have Name, otherwise anon
    
    // all functions have call(), apply(), bind()
    
// person object , obj literal

var person = {
    firstname: "John",
    lastname: "Doe",
    // method
    getFullName: function(){
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var person2 = {
    firstname: "Jose",
    lastname: "Dia",
    // method
    getFullName: function(){
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

// what about call/apply/bind
// have a log function outside

var logName = function(lang1, lang2){
    console.log("Logged " + this.getFullName());
    console.log("Arguments: " + lang1 + ' ' + lang2)
    console.log("");
}


//use logName function, use .bind, because the function returns, use function as an object, call a method of the object, pass as a parameter whatever object you want to be the "this"
var logPersonName = logName.bind(person);

// logPersonName();
logPersonName("en");

// alternative - logName as Immediatley Invoked Function
var logPersonName2 = function(lang1, lang2){
    console.log("Logged " + this.getFullName());
}.bind(person2)

logPersonName2();

// invoke but can control what this means, also parameters
// not a copy of the function, just executes it
logName.call(person, "en", "es");
logName.call(person2, "es", "en")

// call and apply are the same, except apply takes parameters as an array

logName.apply(person, ["en", "es"]);
logName.apply(person2, ["es", "en"]);

var person3 = {
    firstname: "Boaty",
    lastname: "McBoatFace",
    // method
    getFullName: function(){
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

// other method for bind or apply
// logName.apply(person3, ["es", "en"]);

(function (lang1, lang2){
    console.log("Logged " + this.getFullName());
    console.log("Arguments: " + lang1 + ' ' + lang2)
    console.log("");
// }).apply(person, ["en", "es"]);
}).call(person3, "en", "es");

// at 12min