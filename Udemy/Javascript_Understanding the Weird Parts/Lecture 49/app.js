function sayHiLater() {
    
    var greeting = "Hi!";
    
    setTimeout(function(){
        console.log(greeting);
    }, 3000);
}

sayHiLater();


// what happens? - it says Hi! after 3 secs.
// using function expressions and closures

// settimeout takes a function object, which is passed as a parameter, so that is making use of first class function in JS
// function created on the fly - so its a function expression, and the time, to setTimeout.  SetTimeout then finishes.

// async process, setTimeout goes and waits, after 3 seconds, drops an event "MyTimeout has Finished" and the engine says - are there any functions listening?  and it finds one!  our function which was passed as a parameter! so our function runs, and its looking for greeting, but does the function have that?  NO!  so it looks to its outer context, and that has one, WHOO HOOO! cause it knows where our orphaned variable from the sayHiLater() execution context(now popped) is hanging out, so it goes and gives that variable a big hug


// same with the jQuery!
// jQuery uses function expressionsand first-class functions!
// click is a function/method
// $("button").click(function(){
    //.click function/method accepts ANOTHER FUNCTION!!! to run when that event happens!
// })

// Callback function

function tellMeWhenDone(callback){
    var a = 1000;
    var b = 2000;
    
    callback();
}

tellMeWhenDone(function(){
    console.log("I am Done!");
})

tellMeWhenDone(function(){
    console.log("All Done Done!");
})