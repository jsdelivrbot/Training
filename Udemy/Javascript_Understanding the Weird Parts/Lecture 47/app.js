function buildFunctions(){
    
    var arr = [];
    
    for(var i = 0; i < 3; i += 1){
        arr.push(
            function(){
                console.log(i);
            }
        )
    }
    
    return arr;
}

var fs = buildFunctions();

// this invokes the console.log, but at this time i = 3
fs[0]();
fs[1]();
fs[2]();

//outputs all 3's 

// Execution stack


// 3. (now 2) then hits fs[0](); - setup fs[0]() execution context, but no I in this function execution context so goes up the chain to buildFunction to find in in remaining variable context
// 2. (at 3 popped) Hit buildFunctions() - setup function execution context = [(by time hit return)i=3, arr[f1(object), f2(object), f3(object)]] - before hitting return, all you do is push function objects into the array, at end of for loop - i === 3; = then this is POPPED OFF - but variable context remains.
// 1.  Global Execution context - [ buildFunctions(), fs ]

// es6
function buildFunctions2(){
    
    var arr = [];
    
    for(var i = 0; i < 3; i += 1){
        // here let is scoped to this block pre{ and end } closiong the for loop
        // everytime the loop runs, j will be a new spot in memory
        let j = i
        arr.push(
            // when this is called, its looking at a different place in memory
            function(){
                console.log(j);
            }
        )
    }
    
    return arr;
}

var fs2 = buildFunctions2();

// this invokes the console.log, but at this time i = 3
fs2[0]();
fs2[1]();
fs2[2]();

// es5 need a separated execution context for each - how?  IIFE
function buildFunctions3(){
    
    var arr = [];
    
    for(var i = 0; i < 3; i += 1){
        arr.push(
            // push result of IIFE
            (function(j){
                // which is this Console log ( so you'll get 0, 1, 2)
                return function(){
                    // looking for j only goes to IIFE context
                    console.log(j);
                }
            }(i))
        )
    }
    
    return arr;
}

var fs3 = buildFunctions3();

// this invokes the console.log, but at this time i = 3
fs3[0]();
fs3[1]();
fs3[2]();