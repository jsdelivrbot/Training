// hold modules 4 to 5 

// Storage Controller (End)


// Item Controller
const ItemCtrl = (function(){
    // console.log("Item Controller");
    // Item Constructor
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
    // Data Structure / State
    const data = {
        item: [
            {id: 0, name: 'Steak Dinner', calories: 1200},
            {id: 1, name: 'Cookies', calories: 400},
            {id: 2, name: 'Eggs', calories: 300}
        ],
        currentItem: null,
        totalCalories: 0
    }
    
    // public methods
    return {
        getItems: function(){
            return data.items;
        },
        logData: function(){
            return data;
        }
    }
})();

// UI Controller
const UICtrl = (function(){
    // console.log("UI Controller");
    
    // publick methods
    return {
        
    }
})();


// App Controller
const App = (function(ItemCtrl, UICtrl){
    // console.log("App Controller");
    // console.log(ItemCtrl.logData());
    
    
    // public methods
    return {
        init: function(){
            console.log("Initializing App...");
            const items = ItemCtrl.getItems();
            console.log(items);
        }
    }
    
})(ItemCtrl, UICtrl);

// initialize App

App.init();