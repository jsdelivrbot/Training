const http = new easyHTTP;

// get posts
// pass in url

// deosn't works posts undefined
// const post = http.get('https://jsonplaceholder.typicode.com/posts');
// console.log(posts);

http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
    // if you add a 1 to the url above, it will error and return a message.
    if(err){
        console.log(err);
    }
    else{
        console.log(posts);
    }
});