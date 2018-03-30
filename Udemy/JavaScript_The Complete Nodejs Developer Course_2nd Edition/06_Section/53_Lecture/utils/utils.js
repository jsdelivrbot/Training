add = (a, b) => {
    return a + b;
}
square = (a) => {
    return a * a;
}
setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
}
asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        // mocha fails after 2 sec.. :)
        callback(a + b)
    }, 1000);
}
// asyncSquare
asyncSquare = (a, callback) => {
    setTimeout(() => {
        callback(a * a);
    }, 1000);
}
module.exports = {
    // add,
    // square
    add: add,
    square: square,
    setName: setName,
    asyncAdd: asyncAdd,
    asyncSquare: asyncSquare
} 