// Basic Structure

(function(){
    // Declare private vars and functions
    
    return {
        // Declare public var and functions
    }
})();

const UICtrl = (function(){
    let text = 'Hello World';
    // private
    const changeText = function(){
        const element = document.querySelector('h1');
        element.textContent = text;
    }
    // public
    return {
        callChangeText: function(){
            changeText();
            console.log(text);
        }
    }
})();

// UICtrl.callChangeText();

// console.log(UICtrl.text);

// REVEALING MODULE PATTERN

// instead of returning public functions, you basically map an object literal, reveal 
// can reveal certain methods

const ItemCtrl = (function(){
    // lots of times, you will see an underscore in front of a private variables. (your choice!)
    let _data = [];
    
    function add(item){
        _data.push(item);
        console.log('Item Added...');
    }
    
    function get(id){
        return _data.find(item => {
            return item.id === id;
        });
    }
    
    // return object literal
    return {
        add: add,
        // if you don't include in the return, it will be a private method.
        get: get
    }
    
})();

ItemCtrl.add({ id: 1, name: 'John' });
ItemCtrl.add({ id: 2, name: 'Mark' });
console.log(ItemCtrl.get(2));