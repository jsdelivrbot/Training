const http = new easyHTTP;

// get posts
// pass in url

// deosn't works posts undefined
// const post = http.get('https://jsonplaceholder.typicode.com/posts');
// console.log(posts);

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//     // if you add a 1 to the url above, it will error and return a message.
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(posts);
//     }
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
//     // if you add a 1 to the url above, it will error and return a message.
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(post);
//     }
// });

// Create Data
const data = {
    userId: 11,
    title: 'Custom Post',
    body: 'This is a Custom Post'
};

// POST Request - create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/2', function(err, response){
    // if you add a 1 to the url above, it will error and return a message.
    if(err){
        console.log(err);
    }
    else{
        console.log(response);
    }
});