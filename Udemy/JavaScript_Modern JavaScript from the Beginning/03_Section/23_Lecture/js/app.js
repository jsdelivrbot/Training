let val;

val = document.getElementById('task-title');
val = document.getElementById('task-title').id;

val = document.getElementById('task-title').className;

val = document.getElementById('task-title').style.background = 'grey';

const taskTitle = document.getElementById('task-title');


// Change Styling
taskTitle.style.color = '#fff';

taskTitle.style.padding = '50px';

// change content
taskTitle.textContent = 'Tasks List';

taskTitle.innerText = 'My Tasks';

taskTitle.innerHTML = '<span style="color:red">Task List</span>'


// query selector

val = document.querySelector('#task-title');
val = document.querySelector('.card-title');
val = document.querySelector('h5');

document.querySelector('li').style.color = 'red';

document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';

document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = 'f4f4f4';

console.log(val);