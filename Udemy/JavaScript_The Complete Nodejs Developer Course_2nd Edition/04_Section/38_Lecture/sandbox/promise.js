var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        // sim delay
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            }
            else {
                reject('Arguments were not Numbers.')
            }
        }, 1500);
    })
}

asyncAdd(5, '10').then(
    (sum) => {
        console.log('Success: ', sum);
        return asyncAdd(sum, 33)
    },
    // (errorMessage) => {
    //     console.log('Error: ', errorMessage);
    // }
)
    .then(
        (sum2) => {
            console.log('Success2: ', sum2);
        },
        // (errorMessage2) => {
        //     console.log('Error: ', errorMessage2);
        // }
    )
        .catch(
            (errorMessage) => {
                console.log(errorMessage);
            }
        );


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