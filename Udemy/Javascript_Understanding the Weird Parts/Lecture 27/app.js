// Boolean(undefined);
// false
// Boolean(null);
// false
// Boolean("");
// false

var a;
// goes and looks for a value
// var a is currently undefined - it is means its false - should log content in ELSE

a = 'something defined';
// now a is something - should mean true - should log content in ELSE

a = 0;
// so last thing to remember - 0 cohersies to false.  SO  - if you want the if to return true, you'll need to check that condition.

// if(a){
//general conditional
if(a || a === 0){
//conditional to handle the 0 condition
    // if a = true    
    console.log('Something is there.');
}
else{
    console.log('Nothing is there.');
}