// function myFunc(){
//     return 'Hello';
// }

// console.log(myFunc());
// ^-- returns "hello"



// async
// async function myFunc(){
//     return 'Hello';
// }

// // console.log(myFunc());
// // ^-- returns a promise

// // get the content from the promise
// myFunc()
//     .then(resolve => console.log(resolve))

// async await

// async function myFunc(){
//     // return 'Hello';
    
//     // #1 this is the promise
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     });
    
    
//     const error = true;
    
//     if(!error){
//         const res = await promise;
//         return res;
//     } else {
//         await Promise.reject(new Error('Something went wrong'));
//     }
    
    
//     // #2 this waits for the promise to return
//     const res = await promise;
//     return res;
// }

// myFunc()
//     // #3 before feeding this
//     .then(res => console.log(res))
//     .catch(err => console.log(err));


/// async with fetch

async function getUsers(){
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    // Only proceed once its resolved
    const data = await response.json();
    
    // only proceed once second promise is resolved
    return data;
}

getUsers().then(users => console.log(users))