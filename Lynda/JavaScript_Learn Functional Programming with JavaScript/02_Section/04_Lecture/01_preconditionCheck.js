// Learning Functional Programming with Javascript
// Chapter 02, Video 05, Exercise 01

// function doIfSafe(n, message, func){
//   if (n != null && typeof n === 'number'){
//     if (message != null && typeof message === 'string'){
//       return func(n, message);
//     }
//   }
// }

function createSafeVersion(func){
  return function(n, message){
    if (n != null && typeof n === 'number'){
      if (message != null && typeof message === 'string'){
        return func(n, message);
      }
    }
  }
}

function printMessageNTimes(n, message) {
  for (var i = 0; i < n; i++) { console.log(message) }
}

function getNthLetter(n, string) {
  return string.charAt(n)
}

function getSubstringOfLength(n, string) {
  return string.substring(0, n)
}

// because it returns another function we want to assign this to a variable.

var printMessageNTimesSafe = createSafeVersion(printMessageNTimes);
var getNthLetterSafe = createSafeVersion(getNthLetter);
var getSubstringOfLengthSafe = createSafeVersion(getSubstringOfLength);

printMessageNTimes(4, "Banana") // prints "Banana Banana Banana Banana"
console.log(getNthLetter(2, "Javascript")) // 'v'
console.log(getSubstringOfLength(5, "Hello and welcome")) // "Hello"


// previous off tests - at line 4
// doIfSafe(4, "Banana", printMessageNTimes) // prints "Banana Banana Banana Banana"
// console.log(doIfSafe(2, "Javascript", getNthLetter)) // 'v'
// console.log(doIfSafe(5, "Hello and welcome", getSubstringOfLength)) // "Hello"
