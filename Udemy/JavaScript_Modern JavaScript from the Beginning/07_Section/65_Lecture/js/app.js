const posts = [
    {
        title: 'Post One',
        body: 'This is Post One'
    },
    {
        title: 'Post Two',
        body: 'This is Post Two'
    },
    {
        title: 'Post Three',
        body: 'This is Post Three'
    }
];

// this is async
function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            // simulate error
            // const error = true;
            // if(!error){
                resolve();
            // } else {
                // reject('Error: Something Went Wrong');
            // }
        }, 2000);
    });
    
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Four', body: 'This is post four'})
    .then(getPosts)
    .catch(function(err){
        console.log(err);
    });