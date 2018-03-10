// entry point

// instantiate github
const gitHub = new GitHub;

// instantiate UI class
const ui = new UI;

// listener
const searchUser = document.getElementById('searchUser');

// search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
    
    if(userText !== ''){
        // do something - make HTTP call to github
        // console.log(userText);
        // make http call
        gitHub.getUser(userText)
            .then(data => {
                if(data.profile.message === "Not Found"){
                    // show alert
                }
                else{
                    // console.log(data);
                    // show profile
                    // data.profile is the info returned
                    ui.showProfile(data.profile);
                }
            })
    } else {
        // clear profile
    }
})