// define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
// console.log(taskInput);

// Invoke all Event Listeners

loadEventListeners();

// Load all event Listeners
function loadEventListeners(){
    // Add Task Event
    form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e){
    // make sure taskInput is wired up
    // if(taskInput.value === ''){
    //     alert('Nothing Added');
    // }
    // else {
    //     alert(taskInput.value)
    // }
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new delete link element
    const link = document.createElement('a');
    // Add Class
    link.className = 'delete-item secondary-content';
    // Add Icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
    // test
    console.log(li);
    
    // clear input
    taskInput.value = '';
    e.preventDefault();
}

