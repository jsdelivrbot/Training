function greet(firstname, lastname, language){
    
    language = language || "default";
    
    if(arguments.length === 0){
        console.log("Missing");
    }
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log(arguments[0]);
}

greet();
greet("seth")
greet("seth", "borne", "english")