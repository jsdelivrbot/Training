// in browser console - its window
// in terminal its object

// console.log(this);

// what about fuction?

// in browser console - its the window
// in teminal = holy cow!

function a(){
    console.log(this);
    this.newvariable = 'hello';
}

var b = function(){
    console.log(this);
}

a();
b();
console.log(newvariable);

// all pointing (by reference) to global object


// 2 object literal method

var c = {
    name: "The C Object",
    log: function(){
        var self = this;
        
        self.name = "Updated"
        console.log(self);
        // this went global = up to a() or b();
        // what do to when this happens? ==========   self!
        var setName = function(newName){
            self.name = newName;
        }
        setName("The C Object");
        console.log(self);
    }
}

c.log();


// let should clear this up!