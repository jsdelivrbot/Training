let val;

const list = document.querySelector('ul.collection');

const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// get children and parents of these nodes

// children of the list (ul)
// NodeList - text and li
// text is linebreak, li is 
val = list.childNodes;
// children element nodes
// HTMLCollection just elemeents, no text
val = list.children;


// show something
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

list.children[1].textContent = 'Hello';

// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children;

// Node Types
// 1 - Element
// 2 - Attribute
// 3 - Text node
// 8 - Comment
// 9 - Document Itself
// 10 - Doctype

// why wont filter work?
// because seems like NodeLists don't have built in .filter method, arrays do
// val = Array.from(val)
// val = val.filter(item => item.nodeType === 1);

// first
val = list.firstChild;
val = list.firstElementChild;

// last
val = list.lastChild;
val = list.lastElementChild;

// count of child
val = list.childElementCount;

// Get Parent Node
val = listItem.parentNode;

val = listItem.parentElement;

val = listItem.parentElement.parentElement.parentElement.parentElement.parentElement;

// next Sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
// prev Sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

// can combine previous and next if you want!
console.log(val);