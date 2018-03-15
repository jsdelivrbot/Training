function EventObserver(){
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn){
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn){
        // filter out from the list whatever matches the callback function.  if there is no match, the callback gets to stay on the list.  the filter returns a new list and reassigns teh list of observers
        this.observers = this.observers.filter(function(item){
            // if item not equal to function 
            if(item !== fn){
                return item
            }
        });
        
        console.log(`You are not unsubscribed from ${fn.name}`);
    },
    fire: function(){
        this.observers.forEach(function(item){
            item.call();
        })
    }
}

const click = new EventObserver();

// event Listeners

document.querySelector('.sub-ms').addEventListener('click', function(){
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function(){
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function(){
    click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function(){
    click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function(){
    click.fire();
});

const getCurMilliseconds = function(){
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

// click Handler

const getCurSeconds = function(){
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}