function greet(firstname, lastname, language){

    language = language || "english";
    
    if(language == "english"){
        console.log("Hello " + firstname + ' ' + lastname + "!");
    }
    
    if(language == "spanish"){
        console.log("Hola " + firstname + ' ' + lastname + "!");
    }
}

greet("Joe", "DiMaggio", "english");
greet("Jose", "DiMaggio", "spanish")

function greetEnglish(firstname, lastname){
    greet(firstname, lastname, "english")
}
function greetSpanish(firstname, lastname){
    greet(firstname, lastname, "spanish")
}

greetEnglish("Joe", "DiMaggio");
greetSpanish("Jose", "DiMaggio");