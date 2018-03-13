const user = {
    email: 'sethman@gmail.com'
}

try {
    // reference Error
    // myFunction();
    
    // produce TypeError
    // null.myFunction();
    
    // syntax Error
    // console.log(eval('2 + 2'));
    // console.log(eval('Hello World'));
    
    // Will produce URIError
    // decodeURIComponent('%');
    
    if(!user.name){
        // throw 'User has No Name';
        throw new SyntaxError('User has no Name');
    }
    
} catch(error){
    console.log(error);
    console.log(`User Error: ${error.message}`);
    // console.log(`${error.name}: It's Null Stupid!`);
    // console.log(error.message);
    // console.log(error.name);
    // console.log(error instanceof ReferenceError);
    // console.log(error instanceof TypeError);
} finally {
    console.log("Finally Runs - No Matter Try/Catch");
}

console.log("Program Continues");