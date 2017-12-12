// class Animal {
//     constructor(name, height){
//         this.name = name;
//         this.height = height;
//     }
    
//     hello(){ console.log(`I'm ${this.name} from the land!`)};
// }
import { Animal } from './Animal';


let generic = new Animal("Tim", 180);
console.log(generic);
generic.hello();

class Lion extends Animal {
    constructor(name, height, color){
        // get access to parent
        super(name, height);
        // extended class attribute
        this.color = color;
    }
    hello(){ console.log(`I'm ${this.name} from the Castle Rock!`)};
}

let newLion = new Lion("Lion", 250, "Golden")
console.log(newLion);
newLion.hello();

// classes are usually in their own modules