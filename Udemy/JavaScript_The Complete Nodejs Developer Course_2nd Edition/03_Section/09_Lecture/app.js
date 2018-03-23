// application starts here
console.log("Starting App...");

// load in built in modules

const fs = require('fs');
// console.log(fs);

// this is depreciated
// fs.appendFile('greetings.txt', 'Hello World!')

// either need to call it synchronously:
// fs.appendFileSync('greeting.txt', 'Hello World')

const os = require('os');
// console.log(os);

const user = os.userInfo();
console.log(user.username);

// or
// use a callback for async
fs.appendFile('greetings.txt', `Hello ${user.username}!`, function(err){
    if(err){
        console.log("Unable to write to file");
    }
})
