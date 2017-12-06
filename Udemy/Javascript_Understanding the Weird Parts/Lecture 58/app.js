// function Person() {
//     this.firstname = "Seth";
//     this.lastname = "Borne"
// }

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.getFullName = function(){
    return this.firstname + " " + this.lastname;
}
// empty object

var seth = new Person("Seth", "Borne");
var steven = new Person("Steven", "LastName")
console.log(seth);
console.log(steven);