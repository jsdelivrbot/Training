// hold modules 4 to 5 
// Storage Controller (End)
// 103 - add meal item with calories - happen through event
// 106 - edit state

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
        getItemByID: function(id){
            let found = null;
            // loop through the data we have, looking for the id.
            data.items.forEach(function(item){
                // if id is found - set found to the item, and return the item.
                if(item.id === id){
                    found = item;
                }
            })
            return found;
        },
        updateItem: function(name, calories){
            // calories to number
            calories = parseInt(calories);
            let found = null;
            data.items.forEach(function(item){
                if(item.id === data.currentItem.id){
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            })
            //updates in data structure, not UI
            return found;
        },
        deleteItem: function(id){
            // get ids
            const ids = data.items.map(function(item){
                return item.id;
            })
            const index = ids.indexOf(id);
            // remove item from array
            data.items.splice(index, 1);
        },
        clearAllItems: function(){
            data.items = [];
            // data.currentItem = null;
            // data.totalCalories = 0; 
        },
        setCurrentItem: function(item){
            data.currentItem = item;
        },
        getCurrentItem: function(){
            return data.currentItem;
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
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
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
        updateListItem: function(updatedItem){
            let listItems = document.querySelectorAll(UISelectors.listItems);
            // node list
            listItems = Array.from(listItems);
            listItems.forEach(function(itemInList){
                const itemID = itemInList.getAttribute('id');
                if(itemID === `item-${updatedItem.id}`){
                    // if true = this is what we update
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${updatedItem.name}: </strong><em>${updatedItem.calories} Calories</em><a class="secondary-content" href=""><i class="edit-item fa fa-pencil"></i></a>`
                }
            })
        },
        deleteListItem: function(itemToDelId){
                const itemID = `#item-${itemToDelId}`;
                const item = document.querySelector(itemID);
                item.remove();  
        },
        removeItems: function(){
            let listItems = document.querySelectorAll(UISelectors.listItems);
            listItems = Array.from(listItems);
            
            listItems.forEach(function(itemToDelete){
                itemToDelete.remove();
            })
        },
        clearInputs: function(){
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        addItemToForm: function(){
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            // show the edit information
            UICtrl.showEditState();
        },
        showTotalCalories: function(totalCalories){
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        clearEditState: function(){
            UICtrl.clearInputs();
            // turn off update, delete and back buttons
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        showEditState: function(){
            // UICtrl.clearInputs();
            // turn off update, delete and back buttons
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
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
        
        // disable submit on enter
        document.addEventListener('keypress', function(event){
            // this disables enter key - which is for older browsers
            if(event.keyCode === 13 || event.which === 13){
                event.preventDefault();
                return false;
            }
        })
        
        // edit icon click event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);
        
        // update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
        
        // delete item event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);
        
        // clear button event
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
        
        // back button ebent
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);
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
    
    const itemEditClick = function(e){
        if(e.target.classList.contains('edit-item')){
            // console.log("edit item");
            // get list item id (item-0)
            const listId = e.target.parentNode.parentNode.id;
            // console.log(listId);
            // break into an array 
            const listIdArr = listId.split('-');
            console.log(listIdArr);
            
            // Get the actual Id
            const id = parseInt(listIdArr[1])
            console.log(id);
            // Get item
            const itemToEdit = ItemCtrl.getItemByID(id);
            
            // Set Current Item
            ItemCtrl.setCurrentItem(itemToEdit);
            
            // add Item to Form
            UICtrl.addItemToForm();
        }
        
        e.preventDefault();
    }
    
    const itemUpdateSubmit = function(e){
        // console.log("update");
        // get item input
        const input = UICtrl.getItemInput();
        
        // Update Item
        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
        
        // update UI
        UICtrl.updateListItem(updatedItem);
        
        // getTotalCalories
        const totalCalories = ItemCtrl.getTotalCalories();
            
        // tc to ui
        UICtrl.showTotalCalories(totalCalories);
        
        UICtrl.clearEditState();
        
        e.preventDefault();
    }
    
    const itemDeleteSubmit = function(e){
        // console.log("delete");
        const currentItem = ItemCtrl.getCurrentItem();
        // Delete from data structure
        ItemCtrl.deleteItem(currentItem.id);
        // Delete from UI
        UICtrl.deleteListItem(currentItem.id);
        // getTotalCalories
        const totalCalories = ItemCtrl.getTotalCalories();
            
        // tc to ui
        UICtrl.showTotalCalories(totalCalories);
        
        UICtrl.clearEditState();
        e.preventDefault();
    }
    
    const clearAllItemsClick = function(e){
        // clear all items from DS
        ItemCtrl.clearAllItems();
        
        UICtrl.removeItems();
        
        // getTotalCalories
        const totalCalories = ItemCtrl.getTotalCalories();
        // tc to ui
        UICtrl.showTotalCalories(totalCalories);
        
        // hide list
        UICtrl.hideList();
        
        e.preventDefault();
    }
    
    // public methods
    return {
        init: function(){
            console.log("Initializing App...");
            // default edit state
            UICtrl.clearEditState();
            
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