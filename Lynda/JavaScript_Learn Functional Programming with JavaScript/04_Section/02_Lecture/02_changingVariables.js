// Learning Functional Programming with Javascript
// Chapter 04, Video 02, Exercise 02

var x = 1;

console.log("x is originally: " + x);

setTimeout(function(){
    x = 99;
    console.log("x has been changed, and is now: " + x);
    setTimeout(function(){
        x = 42;
        console.log("x has been changed again, and is now: " + x);
    }, 3000);
}, 3000);



// setTimeout(function(){
//     x = 1000;
//     console.log("x has been changed, and is now: " + x);
// }, 3000);

console.log("x is " + x);