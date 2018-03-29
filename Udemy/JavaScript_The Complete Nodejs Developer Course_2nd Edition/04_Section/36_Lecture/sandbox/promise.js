// store promise
var somePromise = new Promise((resolve, reject) => {
    // anything for async, parameters are always resolve, reject
    // pretend async
    setTimeout(() => {
        resolve('Hey, It Worked!');
        reject('Error, Unable to Fulfill Promise')
    }, 2500);
    // reject()
});

//this will only get called if resolve gets fulfilled
// somePromise.then((message) => {
//     console.log(message);
// })

// to handle errors, need to pass a second function for that error
somePromise.then(
    (message) => {
        console.log(message);
    }, 
    (error) => {
        console.log(error);
    }
)

console.log('Sync');