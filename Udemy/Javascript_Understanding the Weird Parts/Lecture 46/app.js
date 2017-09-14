function greet(content){
    return function(name){
        console.log(content + ' ' + name);
    }
}

// greet("Hi")("Seth");

var sayHi = greet('Hi');
sayHi('SethMan');









// 3. (Current 2 (stack)) - Hit sayHi("SethMan") - new () 'sayHi' execution context, [passed nameVar = SethMan, now in mem] - when his clog - sees content - what does JS do - goes one step outside.  even though greet() execution context, still refers the memory space of greet.  (any execution variable environment inside a function (even if popped), will still remain)
// 2. (Gone by 3) Hit = var say Hi greet("hi") - this invokes greet() function and new execution context is created [ variable passes - content is sitting in function variable environment ] = this returns new function, and pops off the execution content...but the memory space for its variable environment STAYS
// 1.  Global Execution Context - [before #3 when sayHi anon, in global execution context then up to 3, create sayHi EC]