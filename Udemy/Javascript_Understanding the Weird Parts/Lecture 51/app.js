function mapForEach(inputArray, funct) {
    var newArr = [];
    for(var i = 0; i < inputArray.length; i += 1){
        newArr.push(
            funct(inputArray[i])
        )
    }
    return newArr;
}




var arr1 = [ 1, 2, 3 ];

console.log(arr1);

// var arr2 = [];

// for(var i = 0; i < arr1.length; i += 1){
//     arr2.push(arr1[i] * 2);
// }

var arr2 = mapForEach(arr1, function(item){
    return item * 2;
})

console.log(arr2);

var arr3 = mapForEach(arr1, function(item){
    return item > 2;
})

console.log(arr3);


// this will check if past a limit
// limiter greater or less than
// item is value in an array
var checkPastLimit = function(limiter, item){
    return item > limiter;
}

// how to make a call to map when map only accepts one value?  How to set that first default?  (Limiter)

// BIND

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));

// this is a copy of the checkPastLimit function with limiter = 1 as default

console.log(arr4);

// create a function,where we only pass the limiter and it gives back a function like checkPastLimit.bind()

// simpler

var checkPastLimtSimplified = function(limiter1){
    return function(limiter2, item){
        return item > limiter2;
    }.bind(this, limiter1);
};

// remember, the return is not being executed!  it is creating the function object as a copy then passing the limiter as a default parameter

var arr5 = mapForEach(arr1, checkPastLimtSimplified(1));
console.log(arr5);