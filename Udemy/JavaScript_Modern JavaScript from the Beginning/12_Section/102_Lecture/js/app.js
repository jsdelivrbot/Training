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
        items: [
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
    const UISelectors = {
        itemList: '#item-list'
    }
    // publick methods
    return {
        populateItemList: function(items){
            // loop through each, make a list item and 
            let html = '';
            items.forEach(function(item){
                html += `<li id="item-${item.id}" class="collection-item"><strong>${item.name}: </strong><em>${item.calories} Calories</em><a class="secondary-content" href=""><i class="edit-item fa fa-pencil"></i></a></li>`
            });
            // insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
            
        }
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
            // Fetch Items from DS
            const items = ItemCtrl.getItems();
            // console.log(items);
            // Populate list with items
            UICtrl.populateItemList(items);
            
        }
    }
    
})(ItemCtrl, UICtrl);

// initialize App

App.init();