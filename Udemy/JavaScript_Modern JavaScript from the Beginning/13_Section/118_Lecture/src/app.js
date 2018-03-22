// use json server for fake rest api

import { http } from './http';
import { ui } from './ui';
// console.log(http);
// console.log(ui);

// get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost)

// delete post
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for Edit State
document.querySelector('#posts').addEventListener('click', enableEdit);

// listener for the cancel edit button
document.querySelector('.card-form').addEventListener('click', cancelEdit)

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
    const id = document.querySelector('#id').value;
    
    const data = {
        title: title,
        body: body
    }
    
    // validation
    if(title === '' || body === ''){
        ui.showAlert('Please Enter all Fields', 'alert alert-danger');
    } else {
        // Check for ID
        if(id === ''){
            // this is add post so just create it.
            // Create Post
            http.post('http://localhost:3000/posts', data)
                .then(data => {
                    ui.showAlert('Post Added', 'alert alert-success');
                    ui.clearFields();
                    getPosts();
                })
                .catch(err => console.log(err));
        } else {
            // its an update - so we'll need to do the update here
            http.put(`http://localhost:3000/posts/${id}`, data)
                .then(data => {
                    ui.showAlert('Post Updated', 'alert alert-success');
                    ui.changeFormState('add');
                    getPosts();
                })
                .catch(err => console.log(err));
            
        }
        
    }
}

// deletePost
function deletePost(event){
    if(event.target.parentElement.classList.contains('delete')){
        const id = event.target.parentElement.dataset.id;
        // console.log(id);
        if(confirm('Are you sure?')){
            http.delete(`http://localhost:3000/posts/${id}`)
                .then(data => {
                    // console.log("Data", data);
                    ui.showAlert(`Post Removed`, 'alert alert-danger');
                    getPosts();
                })
                .catch(err => console.log(err))
        }
    }
    event.preventDefault();
}

// enable Edit State
function enableEdit(event){
    // event delegation
    // need to go up to parrent
    // console.log(event.target);
    if(event.target.parentElement.classList.contains('edit')){
        // what to do?
        // get post info via target
        // console.log(event.target.parentElement.dataset.id);
        const id = event.target.parentElement.dataset.id;
        // get title and body
        const title = event.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        // console.log(event.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        const body = event.target.parentElement.previousElementSibling.textContent;
        // console.log(event.target.parentElement.previousElementSibling.textContent);
        // console.log(title, "-",  body);
        const editData = {
            id: id,
            title: title,
            body: body
        }
        
        // fill form with current post
        ui.fillForm(editData);
    }
    
    event.preventDefault();
}

// cancel edit state
function cancelEdit(event){
    // 
    if(event.target.classList.contains('post-cancel')){
        ui.changeFormState('add');
    } 
    event.preventDefault();
}