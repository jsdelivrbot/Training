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
    }
}

export const ui = new UI();