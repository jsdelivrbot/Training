class Animal {
    constructor(name, height){
        this.name = name;
        this.height = height;
        this.hello = () => { console.log(`I'm ${this.name} from the land!`)};
        
    }
}

let generic = new Animal("Tim", 180);
console.log(generic);
generic.hello();

class Lion extends Animal {
    super(){
        this.name = name;
        this.height = height;
        this.hello = () => { console.log(`I'm ${this.name} from the Castle Rock!`)};
    }
}

let newLion = new Lion("Lion", 250)
console.log(newLion);
newLion.hello();