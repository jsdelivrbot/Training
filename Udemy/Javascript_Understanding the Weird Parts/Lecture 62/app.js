Array.prototype.myCustomFeature = "cool";

var array = ['John', 'Jane', 'Jim'];

// for(var prop in array){
//     console.log(prop + ": " + array[prop]);
// }

// don't use for in

// use standard for or while loop

for(let i = 0; i < array.length; i += 1){
    console.log(i + ": " + array[i]);
}