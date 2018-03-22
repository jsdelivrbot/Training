class UI {
    constructor(){
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.formState = 'add';
    }
    // method to show post
    showPosts(postsData){
        // console.log("POSTS", data);
        let output = '';
        postsData.forEach((post) => {
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="edit card-link" data-id="${post.id}"><i class="fa fa-pencil"></i></a>
                        <a href="#" class="delete card-link" data-id="${post.id}"><i class="fa fa-remove"></i></a>
                    </div>
                </div>
            `
        });
        this.post.innerHTML = output;
    }
    showAlert(message, className){
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        div.className = className;
        // add text
        div.appendChild(document.createTextNode(message));
        // insert to DOM - first parent
        const container = document.querySelector('.postsContainer');
        // Get posts
        const posts = document.querySelector('#posts');
        // insert alert div
        container.insertBefore(div, posts)
        // away
        setTimeout(() => {
            this.clearAlert() 
        }, 2000);
    }
    
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
    
    clearIdInput(){
        this.idInput.value = ''
    }
    
    clearFields(){
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }
    // fill form with data to Edit
    fillForm(editData){
        // set inputs
        this.titleInput.value = editData.title;
        this.bodyInput.value = editData.body;
        this.idInput.value = editData.id; 
        
        // state
        this.changeFormState('edit');
    }
    
    changeFormState(type){
        if(type === 'edit'){
            // change the button from POst it to Edit Post, and the color
            this.postSubmit.textContent = 'Update Post';
            this.postSubmit.className = 'post-submit btn btn-warning btn-block';
            // create a cancel button
            const button = document.createElement('button');
            button.className = 'post-cancel btn btn-light btn-block';
            button.appendChild(document.createTextNode('Cancel Edit'));
            // put it in need parent
            const cardForm = document.querySelector('.card-form');
            // get element before to insert
            const formEnd = document.querySelector('.form-end');
            // Insert cancel button
            cardForm.insertBefore(button, formEnd)
            
        } else {
            // change back
            this.postSubmit.textContent = 'Post It';
            this.postSubmit.className = 'post-submit btn btn-primary btn-block'
            if(document.querySelector('.post-cancel')){
                document.querySelector('.post-cancel').remove();
            }
            // Clear the ID from hidden field
            this.clearIdInput();
            // Clear fields
            this.clearFields();
        }
    }
}

export const ui = new UI();