// console.log('Log');

var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Seth'
    }
    setTimeout(() => {
        callback(user);
    }, 3000);
}

// call function
getUser(42, (userObj) => {
    // user Info
    console.log("User:", userObj);
})