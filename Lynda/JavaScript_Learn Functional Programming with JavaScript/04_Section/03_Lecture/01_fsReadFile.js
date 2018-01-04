// Learning Functional Programming with Javascript
// Chapter 04, Video 03, Exercise 01
var fs = require('fs')

var fileContents;

fs.readFile('message.txt', 'utf8', function(err, data) {
  if (err) throw err
  // console.log(data)
  // will work - because its Async
  fileContents = data;
  console.log(fileContents);
})

// wont work, undefined

// console.log(fileContents);