// select

// anon funciton/arrow function
// document.querySelector('.clear-tasks').addEventListener('click', (e) => {
//     console.log("Hello World");
//     e.preventDefault();
// })

document.querySelector('.clear-tasks').addEventListener('click', onClick)

function onClick(e){
    // console.log("Clicked");
    // e.preventDefault();
    let val;
    
    val = e;
    
    // target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    // event
    val = e.type;
    // timestamp
    val = e.timeStamp;
    // coords event relative to window
    val = e.clientY;
    val = e.clientX;
    // coords relative to element
    val = e.offsetY;
    val = e.offsetX;
    
    console.log(val);
}