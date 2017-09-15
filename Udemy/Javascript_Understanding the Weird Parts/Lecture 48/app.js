function makeGreeting(language){
    return function(firstname, lastname){
        if (language === "en"){
            console.log("Hello " + firstname + ' ' + lastname);
        }
        if (language === "es"){
            console.log("Hola " + firstname + ' ' + lastname);
        }
    }
}

var greetEnglish = makeGreeting("en");
var greetSpanish = makeGreeting("es");

greetEnglish("John", "Doe");
greetSpanish("Jose", "Dia");

// A short description.

// A closure:  When you have a function, which accepts a parameter and returns a function (which can also accept parameters) that utilizes the upper level functions parameter.  To return the function, the upper level function is invoked and stored in a variable.  when the outer level function is invoked, the required parameter should be passed.  This sets up an instance of the return function, using that parameter, in memory.  when this is done, the execution context for the outer function is popped off, but its variable memory space is preserved. When the variable (which holds the returned function) is invoked and passed the required parameters, an execution context for the anon function is created () variable - and an space is setup in memory for its parameters.  When this anon function looks to the outer context, it understands (via black javascript engine magic) that it requires the orphaned variable memory space to properly execute.  It gives this orphan(ed memory space) a hug, and thats a closure. Its essentially a recently invoked returned function ( stored in a variable ) giving an orphaned variable(s) in memory space a hug.


// 5. (but current @3) - hit function greetSpanichs - call function that was returned(in var), adds new item to stack.  () greetSpanish gets own Execution COntext and var space [firstname jose lastname dia] setup.  outer reference needs to point to a makegreeting() execution context = js engine knows that this was created in the greetSpanish context - closes up that execution context

// 4. (but current @2) - hit func greetEnglish - call function that was returned, new itemToStack, () greetEnglish gets ownexecution context - [with firstname john, lastname doe] - outer environment reference needs to point to a makegreeting() execution context.  = JS engine knows that it was created in the greetEnglish context - closes up that execution context

// 3. (but current @2) - hit var greetSpanish - call method again - new itemtoStack makeGreeting() gets own EC - [pass language - which is ES] - this returns the function, which is stored in the variable greetSpanish - the new makeGreeting() Execustion Context ends, gets popped off, but memory space still there - [ language = es]

// 2. when hit "var greetEnglish" - new itemtoStack makeGreeting() gets own EC - [pass language, which is EN]- return the function, which is stored inthe variable greetEnglish (points to function) - makeGreeting() ends, gets popped off, but memory space still there - [language = "en"]
// 1.  global Execution context - [ greetEnglish, greetSpanish, makeGreeting()]