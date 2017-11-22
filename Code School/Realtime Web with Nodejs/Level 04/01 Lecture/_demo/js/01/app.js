var hello = require('./custom_hello');

var gb = require('./custom_goodbye');

// console.log(hello());
// console.log(gb.goodbye());

hello();
gb.goodbye();

// different require call

require('./custom_goodbye').goodbye();