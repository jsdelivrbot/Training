const clearBtn = document.querySelector('.clear-tasks');

const card = document.querySelector('.card');

const heading = document.querySelector('h5');

// Event Action - Click
// clearBtn.addEventListener('click', runEvent)
// Event Action - Double Click
// clearBtn.addEventListener('dblclick', runEvent);

// Event Action - Mouse Down
// clearBtn.addEventListener('mousedown', runEvent);
// Event Action = Mouse UP
// clearBtn.addEventListener('mouseup', runEvent);
// parent once
// Event Action - Mouse Enter
// card.addEventListener('mouseenter', runEvent)

// Event Action - Mouse LEave
// card.addEventListener('mouseleave', runEvent);
// all children, everyt time
// Event Action - Mouse Over
// card.addEventListener('mouseover', runEvent);

// Event Action - Mouse Out
// card.addEventListener('mouseout', runEvent);

// Event Action - Mouse Move
card.addEventListener('mousemove', runEvent);

// Event Action - 

// Event Handler - function
function runEvent(e){
    console.log(`Event Type: ${e.type}`);
    
    // coords
    heading.textContent = `MouseX: ${e.offsetX} | MouseY: ${e.offsetY}`;
    
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}