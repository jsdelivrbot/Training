// var arr = new Array();
// var arr = [1, 2, 3];

var arr = [
    1,
    false,
    {
        name: "Seth",
        address: "here"
    },
    function(name){
        var greeting = 'Hello ';
        console.log(greeting + name + "!");
    },
    "hello"
];

console.log(arr[0]);
console.log(arr);

arr[3](arr[2].name);