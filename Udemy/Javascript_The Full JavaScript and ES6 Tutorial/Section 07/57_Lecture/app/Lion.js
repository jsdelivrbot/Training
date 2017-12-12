import { Animal } from "./Animal"

class Lion extends Animal {
    constructor(name, height, color){
        // get access to parent
        super(name, height);
        // extended class attribute
        this.color = color;
    }
    hello(){ console.log(`I'm ${this.name} from the Castle Rock!`)};
}

export { Lion }