// console.log(1 < 2 < 3); 

// (1 < 2 < 3)
// evaluates to 1 < 2 to true
// true < 3 --(1 < 3)
// returns true

// (3 < 2 < 1)
// evaluates 3 < 2 to false
// false < 1 -- (0 < 1)
// returns true

// Number(undefined)
//NaN

// Number(null)
// 0

// false == 0;
// true

// var a = false;
// a == 0;
//true

// null == 0;
// false

// null < 1;
// true

// "" == 0
// true

// "" == false
// true

// triple ===

// 3 === 3;
// //ture

// "3" === "3";
// //true

// 3 === "3";
// //false

var a = 0;
var b = false;

// if (a == b){ equal
if (a === b){   //not
    console.log('They are equal!');
}
else {
    console.log('Nope, not equal.');
}
