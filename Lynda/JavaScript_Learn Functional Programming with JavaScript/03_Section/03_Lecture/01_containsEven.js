// Learning Functional Programming with Javascript
// Chapter 03, Video 04, Exercise 01

var _ = require("lodash")

var numbers = [ 2, 4, 6, 8, 10, 12 ]

// var arrayContainsEven = false

var arrayContainsEven = _.some(numbers, function(element){
  return element % 2 === 0;
})

console.log("Array Contains Even: " + arrayContainsEven);

// for (var i = 0; i < numbers.length; i++) {
//   var element = numbers[i]
//   if (element % 2 === 0) {
//     arrayContainsEven = true
//   }
// }

// var arrayIsAllEven = true

var arrayIsAllEven = _.every(numbers, function(element){
  return element % 2 === 0;
})

console.log("Array Contains All Evens: " + arrayIsAllEven);

// for (var i = 0; i < numbers.length; i++) {
//   var element = numbers[i]
//   if (!(element % 2 === 0)) {
//     arrayIsAllEven = false
//   }
// }
