var person = {
    firstName: 'Default',
    lastName: 'Default',
    greet: function(){
        return 'Hi ' + this.firstName;
    }
}

var seth = Object.create(person);
seth.firstName = "Seth";
seth.lastName = "Borne";
console.log(seth);

console.log(seth.greet());