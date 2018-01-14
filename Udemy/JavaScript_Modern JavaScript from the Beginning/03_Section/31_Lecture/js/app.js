// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
// })

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// })

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// })

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// })

// Event Delegation

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    // console.log(e.target);
    
    // a way , but doesn't work if not exact match
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     // console.log('delete item');
    //     console.log(e.target.parentElement);
    // }
    
    // best way
    if(e.target.parentElement.classList.contains('delete-item')){
        // console.log('delete item');
        console.log(e.target.parentElement);
        e.target.parentElement.parentElement.remove();
    }
}