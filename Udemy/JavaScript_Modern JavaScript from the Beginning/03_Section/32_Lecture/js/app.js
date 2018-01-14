// set local storage item

// localStorage.setItem('name', 'John')
// localStorage.setItem('age', '30');

// session storage

// sessionStorage.setItem('name', 'Beth')

// remove from storage

// localStorage.removeItem('name');

// get from storage

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

// localStorage.clear();

document.querySelector('form').addEventListener('submit', (e) => {
    const task = document.getElementById('task').value;
    
    // simple DS - array
    let tasks;
    
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    
    tasks.push(task);
    
    localStorage.setItem('tasks', JSON.stringify(tasks))
    // prevent redirect
    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
})