let call = () => {
    // without a method to gain access - will error bc not in GS
    let secret = 'ES61 rocks!';
    // method to gain access
    let reveal = () => {
        console.log(secret);
    }
    // reveal();
    return reveal;
}

// console logging secret will error
// console.log(secret);

// but if you invoke call, which in turn invokes reveal, which will allow secret in the GS, thus, you'll see it console.log

let unveil = call();
unveil();
// lexical scoping
// inner functions accessing values in parent scopes is called lexical scoping