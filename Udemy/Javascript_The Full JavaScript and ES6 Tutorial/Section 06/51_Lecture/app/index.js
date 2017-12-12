const addToCart = (item, number) => {
    // check for invalid input
    // return Number.isFinite(number);
    return Number.isSafeInteger(number);
    // js only likes up to 2 ^ 53
}

// console.log(addToCart('shirt', Infinity));
// console.log(addToCart('shirt', 5));
console.log(addToCart('shirt', Math.pow(2, 54)));