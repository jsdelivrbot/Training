// function b(){

// }
// function a(){
//     b();
// }
// a();



function a(){
    b();
    console.log(b + " in f(a)");
    var c;
    console.log(c + ' in f(a)');
}
function b(){
    var d;
    console.log(d + ' in f(b)');
}
a();
var d;
console.log(d + ' in global');









//(at this point - d undefined, a, b can run.  if a ran, b undefined, c undefined, if b, then d undefined)
// Global Execution Context - all functions stored, all variables have memory