// use json server for fake rest api

import { http } from './http';
import { ui } from './ui';
// console.log(http);
console.log(ui);

// get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost)

// Get Posts
function getPosts(){
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        // .then(data => console.log(data))
        .catch(err => console.log(err));    
}

// Submit Post - will also handle edit
function submitPost(){
    // get form data
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    
    const data = {
        title: title,
        body: body
    }
    
    // Create Post
    http.post('http://localhost:3000/posts', data)
        .then(data => {
            ui.showAlert('Post Added', 'alert alert-success');
            ui.clearFields();
            getPosts();
        })
        .catch(err => console.log(err));
}