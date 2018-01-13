// Replacing Element

// create Element

const newHeading = document.createElement('h2');

// add id
newHeading.id = 'task-title';

// new text node
newHeading.appendChild(document.createTextNode('Task List'));

// get the old heading
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action');

// Replace 

cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const liAll = document.querySelectorAll('li');
const list = document.querySelector('ul');

liAll[0].remove();

// remove child element
list.removeChild(liAll[4])

// const liAll2 = document.querySelectorAll('li');

console.log(liAll);
console.log(list);

//CLASSES and ATTR
const firstLi = document.querySelector('li:first-child');
console.log(firstLi.children[0]);

const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
// add
link.classList.add('test');
// remove
link.classList.remove('test');
val = link;

// attributes

val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');

link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');

console.log(val);