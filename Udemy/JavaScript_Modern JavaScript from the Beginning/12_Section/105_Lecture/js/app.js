// hold modules 4 to 5 
// Storage Controller (End)
// 103 - add meal item with calories - happen through event

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
            // {id: 0, name: 'Steak Dinner', calories: 1200},
            // {id: 1, name: 'Cookies', calories: 400},
            // {id: 2, name: 'Eggs', calories: 300}
        ],
        currentItem: null,
        totalCalories: 0
    }
    
    // public methods
    return {
        getItems: function(){
            return data.items;
        },
        addItem: function(name, calories){
            let ID;
            //Create id
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }
            // Calories to Number
            calories = parseInt(calories);
            // create new item
            const addItem = new Item(ID, name, calories)
            data.items.push(addItem);
            console.log(data);
            return addItem;
        },
        getTotalCalories: function(){
            // loop through the items, add the calories
            let total = 0;
            data.items.forEach(function(item){
                total += item.calories;
                console.log(total);
            })
            console.log(total);
            data.totalCalories = total;
            return data.totalCalories;
        },
        logData: function(){
            return data;
        }
    }
})();

// UI Controller
const UICtrl = (function(){
    // console.log("UI Controller");
    // this is private
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'
    }
    // public methods
    return {
        populateItemList: function(items){
            // loop through each, make a list item and 
            let html = '';
            items.forEach(function(item){
                html += `<li id="item-${item.id}" class="collection-item"><strong>${item.name}: </strong><em>${item.calories} Calories</em><a class="secondary-content" href=""><i class="edit-item fa fa-pencil"></i></a></li>`
            });
            // insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
            
        },
        hideList: function(){
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        showList: function(){
            document.querySelector(UISelectors.itemList).style.display = 'block';
        },
        getItemInput: function(){
            // console.log(UISelectors.itemNameInput).value;
            // console.log(document.getElementById(UISelectors.itemNameInput).value);
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value,
            }
        },
        addListItem: function(item){
            // show the list
            this.showList();
            // create li element
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.id = `item-${item.id}`
            // add HTML
            li.innerHTML = `<strong>${item.name}: </strong><em>${item.calories} Calories</em><a class="secondary-content" href=""><i class="edit-item fa fa-pencil"></i></a>`;
            // insert
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },
        clearInputs: function(){
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        showTotalCalories: function(totalCalories){
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        // public method to get selectors
        getSelectors: function(){
            return UISelectors;
        }
    }
})();


// App Controller
const App = (function(ItemCtrl, UICtrl){
    // console.log("App Controller");
    // console.log(ItemCtrl.logData());
    // function expression - load event listeners
    const loadEventListeners = function(){
        // get UI Selectors
        const UISelectors = UICtrl.getSelectors();
        //
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    }
    
    // item add submit
    const itemAddSubmit = function(e){
        // console.log('Add');
        // get item input
        const input = UICtrl.getItemInput();
        // check that both fields are filled out
        if(input.name !== '' && input.calories !== ''){
            // console.log(123);
            // add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);
            // Add item to UI List
            UICtrl.addListItem(newItem);
            console.log("here");
            // getTotalCalories
            const totalCalories = ItemCtrl.getTotalCalories();
            // console.log(totalCalories);
            
            // tc to ui
            UICtrl.showTotalCalories(totalCalories);
            
            // Clear input fields
            UICtrl.clearInputs();
        }
        e.preventDefault();
    }
    
    // public methods
    return {
        init: function(){
            console.log("Initializing App...");
            // Fetch Items from DS
            const items = ItemCtrl.getItems();
            // console.log(items);
            if(items.length === 0){
                UICtrl.hideList();
            } else {
                // Populate list with items
                UICtrl.populateItemList(items);
            }
            // getTotalCalories
            const totalCalories = ItemCtrl.getTotalCalories();
            
            // tc to ui
            UICtrl.showTotalCalories(totalCalories);
            
            // load in event listeners
            loadEventListeners();
        }
    }
    
})(ItemCtrl, UICtrl);

// initialize App

App.init();