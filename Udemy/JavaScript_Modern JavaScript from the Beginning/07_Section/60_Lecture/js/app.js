document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    console.log('get jokes');
    const number = document.querySelector('input[type="number"]').value;
    
    // make object
    const xhr = new XMLHttpRequest();
    
    // open
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    
    xhr.onload = function(){
        if(this.status === 200){
            // const response = this.responseText;
            // need to parse this response
            const response = JSON.parse(this.responseText);
            // console.log(response);
            // in the DOM
            
            let output = '';
            if(response.type === 'success'){
                /// continue
                response.value.forEach(function(jokeItem){
                    output += `<li>${jokeItem.joke}</li>`
                })
            }
            else {
                output += `<li>Something went Wrong</li>`
            }
            document.querySelector('.jokes').innerHTML = output;
        }
    }
    
    xhr.send();
    
    e.preventDefault();
}