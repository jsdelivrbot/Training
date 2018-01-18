// define UI variables

const form = document.querySelector('#task-form');
// this grabs ul class collection, the container for all li/s
const taskList = document.querySelector('.collection');
// console.log(taskList);
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

// lets remove a task
function removeTask(event){
    console.log("clicked the remove icon");
    console.log(`This is the param:`);
    // event
    console.log(event);
    // what I am eventing? - in this case - the i tag
    console.log(event.target);
    // but I want the li - so lets go up - but this only gets to a tag
    console.log(event.target.parentElement);
    // 
    console.log(event.target.parentElement.parentElement);
    // so have Element.  now need to delete.  first lets check to make sure that this itme is the correct thing to delete.
    console.log(event.target.parentElement.classList);
    // classList = DOMTokenList
    const doesContain = event.target.parentElement.classList.contains('delete-item');
    // console.log();
    // console.log(doesContain);
    if(doesContain){
        // get li item
        const deleteItem = event.target.parentElement.parentElement;
        // check item
        console.log(deleteItem);
        // all good, delete it!
        deleteItem.remove();
    }
}
// this will clear everything
function clearAllTasks(){
    // one way to clear
    // taskList.innerHTML = '';
    
    // faster with a while loop
    // https://jsperf.com/innerhtml-vs-removechild
    console.log(taskList.childNodes);
    // ^ this gives a nodelist
    console.log(taskList);
    // ^ this is just a element w/ children
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}
// filter throught task event
function filterTasks(event){
    // get the content of the type in the input
    // method toLowerCase() always forces lowercase
    const typedText = event.target.value.toLowerCase();
    // console.log(typedText);
    // get all list items
    // querySelectorAll returns a Node List
    const allListItems = document.querySelectorAll('.collection-item');
    // elements by class = HTML collection
    allListItems.forEach(
        function(taskItem){
            // this will get the text info for each task item
            const textContentItem = taskItem.firstChild.textContent;
            if(textContentItem.toLowerCase().indexOf(typedText) != -1){
                // if this matches then show (if it doesn't or === -1 don't show)
                taskItem.style.display = 'block';
            } else {
                taskItem.style.display = 'none';
            }
        }
    )
}