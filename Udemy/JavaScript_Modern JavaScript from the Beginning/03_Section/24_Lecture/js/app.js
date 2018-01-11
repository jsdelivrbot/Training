const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);

items[0].style.color = 'red';
// items[3].textContent = 'Hello';


// can select more than global
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);

// document .getElementsByTagName
let list = document.getElementsByTagName('li');

console.log(typeof list);
console.log(list[0]);
list[0].style.color = 'red';
list[3].textContent = 'Hello Second';

//HTML is not an array
// to convert from HTML Collection Object to Array
list = Array.from(list)

// list.reverse();

// list.forEach((list, index) => 
//     {
//         console.log(list)
//         list.textContent = `${index}: Hello`
//     }
// );

// list.forEach((list) =>
//     console.log(list)
// );

console.log(list);

// querySelectAll()

// gives Node list
// NL is not just elements but also text nodes
// can do forEach, other methods without converting

const itemsNL = document.querySelectorAll('ul.collection li.collection-item');

console.log(itemsNL);

itemsNL.forEach((item, index) => {
    item.textContent = `${index}: Hello`
})

const itemsNLOdd = document.querySelectorAll('li:nth-child(odd)');
const itemsNLEven = document.querySelectorAll('li:nth-child(even)');

itemsNLOdd.forEach((li, index) => 
    {
        li.style.background = '#ccc'
    }
)

for(let i = 0; i < itemsNLEven.length; i += 1){
    itemsNLEven[i].style.background = '#f4f4f4'
}