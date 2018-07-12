// Game function
// guess between a min and a max

// player gets a certain amount of guesses

// notify player of the guesses remaining

// notify player of the guesses remaining

// notify the player of the correct answer if loose

// let player choos to play again

// Game Values

let min = 1;
let max = 10;
let winningNumber = 2;
let guessesLeft = 3;

// UI Elements

const game = document.getElementById('game');

const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');

const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
    console.log(parseInt(guessInput.value));
    let guessValue = parseInt(guessInput.value);
    // console.log(guessValue);
    
    // Validate
    if(isNaN(guessValue) || guessValue < min || guessValue > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }
    if(guessValue === winningNumber){
        // disable input
        // guessInput.disabled = true;
        // guessInput.style.borderColor = 'green'
        // setMessage
        // setMessage(`${winningNum} is correct, YOU WIN!`, 'green')
        gameOver(true, `${winningNumber} is correct, YOU WIN!`)
    }
    else {
        // wrong number
        guessesLeft -= 1;
        //game over
        if(guessesLeft === 0){
            // guessInput.disabled = true;
            // guessInput.style.borderColor = 'red';
            // set message
            // setMessage(`Game Over, you lost.  The correct number was ${winningNumber}`)
            gameOver(false, `Game Over, you lost.  The correct number was ${winningNumber}`)
        } else {
            // change border color
            guessInput.style.borderColor = 'red';
            // clear input
            guessInput.value = '';
            // game continues
            setMessage(`${guessValue} is not correct, ${guessesLeft} guesses left`, 'red')
        }
    }
})

const gameOver = (didWin, messageParam) => {
    let color;
    didWin === true ? color = 'green' : color = 'red'
    
    guessInput.disabled = true;
    guessInput.style.borderColor = color
    message.style.color = color;
    // setMessage
    setMessage(messageParam, color)
}

const setMessage = (messageParam, messageColor) => {
    message.style.color = messageColor;
    message.textContent = messageParam;
}