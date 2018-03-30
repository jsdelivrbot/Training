const utils = require('./utils');

// BDD behavior driven development
// test add
it('should add two numbers', () => {
    var res = utils.add(33, 11);
    if(res !== 44){
        throw new Error(`Expected 44, but got ${res}`)
    }
})

it('should square two numbers', () => {
    var squareRes = utils.square(2)
    if(squareRes !== 4){
        throw new Error(`Expected 4, but got ${squareRes}`)
    }
})

