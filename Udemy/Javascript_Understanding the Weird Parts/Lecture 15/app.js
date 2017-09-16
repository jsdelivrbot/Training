// function b(){

// }
// function a(){
//     b();
// }
// a();



// function a(){
//     b();
//     console.log(b + " in f(a)");
//     var c;
//     console.log(c + ' in f(a)');
// }
// function b(){
//     var d;
//     console.log(d + ' in f(b)');
// }
// a();
// var d;
// console.log(d + ' in global');

function b(){
    var myVar;
    console.log(myVar);
}
function a(){
    var myVar = 2;
    console.log(myVar);
    b();
}
var myVar = 1;
console.log(myVar);
a();
console.log(myVar);






//(at this point - d undefined, a, b can run.  if a ran, b undefined, c undefined, if b, then d undefined)
// Global Execution Context - all functions stored, all variables have memory