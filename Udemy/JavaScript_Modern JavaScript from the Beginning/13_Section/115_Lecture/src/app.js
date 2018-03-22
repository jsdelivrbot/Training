// use json server for fake rest api

import { http } from './http';
import { ui } from './ui';
// console.log(http);
console.log(ui);

// get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

function getPosts(){
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        // .then(data => console.log(data))
        .catch(err => console.log(err));    
}