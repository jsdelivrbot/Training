let p = new Promise((resolve, reject) => {
    // resolve('Resolved promise data');
    // reject('Rejected Data')
    setTimeout( () => resolve("Resolved Promise Data"), 3000);
})

// resolve test  // how to test reject?
p.then(response => console.log(response)).catch(error => console.log(error));
console.log("After Promise Consumption");


