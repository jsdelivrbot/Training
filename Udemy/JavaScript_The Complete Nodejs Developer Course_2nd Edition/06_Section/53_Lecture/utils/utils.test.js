const utils = require('./utils');
const expect = require('expect')


// BDD behavior driven development
// test add
it('should add two numbers', () => {
    var res = utils.add(33, 11);
    // if(res !== 44){
    //     throw new Error(`Expected 44, but got ${res}`)
    // }
    expect(res).toBe(44);
    expect(res).toBeA('number')
})

it('should square two numbers', () => {
    var squareRes = utils.square(2)
    // if(squareRes !== 4){
    //     throw new Error(`Expected 4, but got ${squareRes}`)
    // }
    expect(squareRes).toBe(4);
    expect(squareRes).toBeA('number')
})

it('should expect same values', () => {
    // expect(12).toNotBe(11);
    // expect({name: 'Anthony'}).toBe({name: 'Anthony'});
    // looks at obj properties
    // expect({name: 'Anthony'}).toEqual({name: 'Anthony'});
    // expect({name: 'Anthony'}).toNotEqual({name: 'Anthony'});
    // expect([2, 3, 4]).toInclude(5);
    // expect([2, 3, 4]).toInclude(2);
    // expect([2, 3, 4]).toExclude(5);
    // expect([2, 3, 4]).toExclude(2); 
    expect({
        name: 'Seth',
        age: 25,
        location: 'Seattle'
    })
    // .toInclude({
    //     // age: 23
    //     age: 25
    // })
    .toExclude({
        age: 23,
    })
})

// first and last names are set
const user1Obj = {
    age: 34,
    location: 'Seattle'
}


it('userObj should contain firstName=Seth, lastName=Borne', () => {
    const sethUser = setName(user1Obj, 'Seth Borne')
    // console.log(sethUser);
    expect(sethUser).toInclude({
        firstName: 'Seth',
        lastName: 'Borne'
        }
    )
    expect(sethUser).toBeA('object')
})