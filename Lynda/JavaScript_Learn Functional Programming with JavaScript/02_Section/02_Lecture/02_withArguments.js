// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 02

function callWith2Arguments(arg1, arg2, func){
  return func(arg1, arg2)
}

// calls below func
console.log(callWith2Arguments(1, 2, add));
console.log(callWith2Arguments(9, 4, subtract));

// calls anonymous
console.log(callWith2Arguments(2, 4, function(x, y){
  return x * x + y * y;
}));



function add(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}
