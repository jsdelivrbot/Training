document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create XHR Object
    const xhr = new XMLHttpRequest();
    // open request
    xhr.open('GET', './data/data.txt', true);
    // 
    // 200: Ok
    // 403: Forbidden
    // 404: Not Found
    // readyState
    // 0: request not initialized
    // 1: server connection established
    // 2: request recieved
    // 3: processing request
    // 4: request finished and response is ready
    // xhr.onload = function(){
    //     // 200 means everything went well
    //     if(this.status === 200){
    //         console.log(this.responseText);
    //     }
    // }
    // Optional for spiners 
    xhr.onprogress = function(){
        // onready process = 3
        console.log('ReadyState', xhr.readyState);
    }
    
    console.log('ReadyState', xhr.readyState);
    xhr.onreadystatechange = function(){
        console.log('ReadyState', xhr.readyState);
        if(this.status === 200 && this.readyState === 4){
            document.getElementById('output').innerHTML = `
            <h1>${this.responseText}</h1>
            `
            console.log(this.responseText);
        }
    }
    // error catch
    xhr.onerror = function(){
        console.log("Request Error...");
    }
    
    // send
    xhr.send();
}