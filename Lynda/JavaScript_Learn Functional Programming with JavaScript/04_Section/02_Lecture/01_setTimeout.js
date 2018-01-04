// Learning Functional Programming with Javascript
// Chapter 04, Video 02, Exercise 01

console.log("Function Executed");

// this is an asyn function
setTimeout(function(){
    console.log("After 3 Seconds");
}, 3000);

console.log("After the Timeout");