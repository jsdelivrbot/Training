// const brad = {
//     name: 'Brad',
//     age: 30
// }

// console.log(brad);
// console.log(brad.age);

// if you want more than one, you shyould make a constructor
// or inheritance/prototypes

// function Person(){
//     this.name = 'Brad'
// }

// function Person(name, age){
//     this.name = name || 'Joe';
//     this.age = age;
// }

function Person(name, dob){
    this.name = name || 'Joe';
    this.birtday = new Date(dob);
    // method
    this.calcAge = function(){
        const diff = Date.now() - this.birtday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}


// this.alert(1);
// const brad = new Person('Brad', 36);
// console.log(brad);
// const john = new Person('John', 30);
// console.log(john);

const brad = new Person('Brad', "9-10-1981");
console.log(brad);
console.log(brad.calcAge());