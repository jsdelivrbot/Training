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
module.exports = {
    // add,
    // square
    add: add,
    square: square,
    setName: setName
} 