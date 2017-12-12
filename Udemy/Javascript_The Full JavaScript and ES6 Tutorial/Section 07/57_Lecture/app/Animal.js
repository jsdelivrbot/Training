class Animal {
    constructor(name, height){
        this.name = name;
        this.height = height;
    }
    
    hello(){ console.log(`I'm ${this.name} from the land!`)};
}

export { Animal };