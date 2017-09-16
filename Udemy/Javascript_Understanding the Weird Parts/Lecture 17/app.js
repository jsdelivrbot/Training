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



// Step 1

// function b(){
//     console.log(myVar);
//     //this is a reference to the outer environment
// }
// function a(){
//     var myVar = 2;
//     b();
// }
// var myVar = 1;
// a();


//(at this point - d undefined, a, b can run.  if a ran, b undefined, c undefined, if b, then d undefined)
// Global Execution Context - all functions stored, all variables have memory


// Step 2

function a(){
    function b(){
        console.log(myVar);
        //this is a reference to the outer environment - which is a
    }
    var myVar = 2;
    // console.log(myVar);
    b();
}
var myVar = 1;
// console.log(myVar);
a();
// console.log(myVar);


// b();
//error with b() - is not defined