// console.log("connected");

// capture form

const form = document.getElementById('guess-form');
console.log(form);
const replayButton = document.getElementById('replay');

// EVENT LISTENERS
// INVOKE

allEventListeners()

function allEventListeners(){
    // listen for the submit\
    form.addEventListener('submit', gameTurn);
    replayButton.addEventListener('click', function(){
        const inputElement = document.getElementById('guessedNumber');
        inputElement.value = '';
        // off replay
        document.getElementById('replay').style.display = 'none';
        // clear alerts
        clearMessages();
        // clear localStorage 
        localStorage.clear();
    })
}

function gameTurn(event){
    // capture the number that was guessed
    const numberInputElement = document.getElementById('guessedNumber')
    const guessedNumber = parseInt(numberInputElement.value);
    
    const max = 10;
    const min = 1;
    
    // console.log(guessedNumber);
    // Edge Case - if a Number is not within range
    if(!guessedNumber){
        console.log("The Input is Empty, Please Enter a Valid Number");
        displayMessage("The Input is Empty, Please Enter a Valid Number", 'error');
        setTimeout(clearMessages, 5000);
        // return;
    }
    else if(guessedNumber > max || guessedNumber < min){
        console.log("Your input Number is out of Range, Please Try Again");
        displayMessage("Your input Number is out of Range, Please Try Again", 'error');
        numberInputElement.clear();
        setTimeout(clearMessages, 5000);
        // return;
        // numberInputElement = '';
    }
    // conditional to check if there is a stored random Number
    let randomNumberValue;
    if(localStorage.getItem('randomNumber') === null){
        // it doesn't exist, so:
        // make a randomNumber
        randomNumberValue = randomNumber(min, max);
        console.log(`Rand Num Generated is: ${randomNumberValue}`);
        // store in local storage
        localStorage.setItem('randomNumber', JSON.stringify(randomNumberValue));
    } else {
        // it exists, so get it
        randomNumberValue = parseInt(JSON.parse(localStorage.getItem('randomNumber')));
        console.log(`Rand Num pulled from Local is: ${randomNumberValue}`);
    }
    // we now have a random number and a guessed number lets compare and do different things
    // clear any previous messages if they exist
    clearMessages()
    console.log(guessedNumber);
    console.log(randomNumberValue);
    if(guessedNumber !== randomNumberValue){
        // lets log up an error, lets let the user know!
        // console.log("YOU LOSE");
        displayMessage('You have Chosen...Poorly', 'incorrect');
    } else {
        // its equal, so then lets send a happy message!
        // console.log("YOU WIN");
        displayMessage('You have Chosen Wisely!  Congrats!', 'success');
        document.getElementById('replay').style.display = 'block';
        
    }
    console.log("el fin");
    // prevent form from doing its normal thing.
    event.preventDefault();
}

function randomNumber(min, max){
    let randomNumber = Math.floor((Math.random()*(max - min + 1)) + min);
    // console.log(randomNumber);
    return randomNumber;
}

function displayMessage(messageStr, type){
    // get the h6 and the form
    console.log(messageStr);
    // const formElement = document.querySelector('#guess-form');
    const formElement = document.getElementById('guess-form');
    console.log(formElement);
    const cardElement = document.querySelector('.card');
    console.log(cardElement);
    // <div class="alert alert-warning alert-dismissible fade show" role="alert">
    //     <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    //     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    //         <span aria-hidden="true">&times;</span>
    //     </button>
    // </div>
    const divElement = document.createElement('div');
        // make classes and attributes for div
        if(type === 'error'){
            divElement.className = 'alert alert-danger alert-dismissible fade show';
        }
        else if(type === 'incorrect'){
            divElement.className = 'alert alert-warning alert-dismissible fade show';
        }
        else if(type === 'success'){
            divElement.className = 'alert alert-success alert-dismissible fade show ';
            
        }
        divElement.setAttribute('role', 'alert');
        // add text
        divElement.appendChild(document.createTextNode(messageStr));
            // make the button and the span for the close char
            const divButton = document.createElement('button');
            divButton.className = 'close';
            divButton.setAttribute('type', 'button');
            divButton.setAttribute('data-dismiss', 'alert');
            divButton.setAttribute('aria-label', 'Close');
                // span
                const buttonSpan = document.createElement('span');
                buttonSpan.setAttribute('aria-hidden', 'true');
                buttonSpan.innerHTML = '&times;';
            // attach span to the button
            divButton.appendChild(buttonSpan);
        // attach the button to the Div
        divElement.appendChild(divButton);
    console.log(divElement);
    cardElement.insertBefore(divElement, formElement);
}

function clearMessages(){
    const divAlert = document.querySelector('.alert');
    if(divAlert){
        divAlert.remove();
    } else {
        console.log("Nothing There!");
    }
}