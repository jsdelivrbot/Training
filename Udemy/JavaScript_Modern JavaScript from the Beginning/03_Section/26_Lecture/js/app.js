// create element 
const li = document.createElement('li');

// add Class
li.className = 'collection-item';
// add Id
li.id = 'new-item';
// add attribute
li.setAttribute('title', 'New Item');
// create text node and append
li.appendChild(document.createTextNode('Hello World'));


// new link element
const link = document.createElement('a')
link.className = 'delete-item secondary-content'
// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'
// link to li
li.appendChild(link)


document.querySelector('ul.collection').appendChild(li)
console.log(li);