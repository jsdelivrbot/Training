// define UI variables

const form = document.querySelector('#task-form');
// console.log(form);

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
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // clear all tasks
    clearBtn.addEventListener('click', clearAllTasks);
    // filter tasks
    filter.addEventListener('keyup', filterTasks)
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

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        // console.log(e.target.parentElement.parentElement);
        // console.log(e.target);
        e.target.parentElement.parentElement.remove();
    }
}

function clearAllTasks(){
    // taskList.innerHTML = '';
    
    // faster with while
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();
    // node list - so can use forEach
    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
    // console.log(text);
}