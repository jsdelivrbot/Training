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
]

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// // this is sync - no Post Four!
// createPost({title: 'Post Four', body: 'This is post four'});

// getPosts();


// this is async
function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 2000);
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

createPost({title: 'Post Four', body: 'This is post four'}, getPosts);