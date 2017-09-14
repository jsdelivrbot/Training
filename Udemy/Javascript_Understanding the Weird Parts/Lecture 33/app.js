// javascript object literal notation

var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

console.log(objectLiteral);

// you can convert an object literal to JSON with JSON.stringify

console.log(JSON.stringify(objectLiteral));

//
//
//

// JSON is a subset of object literal notation
//   - doesn't allow functions as objects.

// var JSONObject ={
//     "firstname": "Mary",
//     "isAProgrammer": true
// }

// console.log(JSONObject);

// you can take a string, and make an object

var JSONValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');
console.log(JSONValue);