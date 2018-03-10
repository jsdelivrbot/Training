const http = new EasyHTTP;

// ==============================================
// Lesson 70
// ==============================================

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// data - User Data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}

// Post User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Update (Put) User
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// delete users
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err))



// ==============================================
// Lesson 68
// ==============================================

// async
// http.get('https://jsonplaceholder.typicode.com/users');

// // sync
// const users = http.get('https://jsonplaceholder.typicode.com/users');
// // undefined
// console.log(users);

// to fix sync - promise
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// data - User Data
// const data = {
//     name: 'John Doe',
//     username: 'johndoe',
//     email: 'jdoe@gmail.com'
// }

// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// update post

// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
    
// delete users
// http.delete('https://jsonplaceholder.typicode.com/users/2')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))