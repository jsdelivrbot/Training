const form = document.querySelector('form');

const taskInput = document.getElementById('task');

const heading = document.querySelector('h5');

const select = document.querySelector('select')

taskInput.value = '';

// Submit
// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);

// KeyUp
// taskInput.addEventListener('keyup', runEvent);

// KeyPress
// taskInput.addEventListener('keypress', runEvent);

// Focus (click inside input)
// taskInput.addEventListener('focus', runEvent);

// Blur (click outside input)
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Copy
// taskInput.addEventListener('copy', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// Input
// taskInput.addEventListener('input', runEvent);

// Change
// select.addEventListener('change', runEvent)

function runEvent(e){
    console.log(`EVENT Type: ${e.type}`);
    //
    console.log(e.target.value);
    
    // heading.innerHTML = e.target.value
    
    // console.log(taskInput.value);
    // taskInput.value = '';
    
    // stop from redirecting
    e.preventDefault();
}

