// object prototype
function Wizard(name, house, pet){
    this.name = name;
    this.house = house;
    this.pet = pet;
    
    this.greet = () => {
        return `I'm ${this.name} from ${this.house}`
    }
}

Wizard.prototype.petName;
// Wizard.prototype.info = () => {
Wizard.prototype.info = function(){
    return `I have a ${this.pet} named ${this.petName}`
}

let newStudent = new Wizard("Harry", "G", "Owl");
newStudent.petName = "Hedwig"
console.log(newStudent.info());