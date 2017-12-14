const budget = () => {
    let balance = 0;
    let changeBal = (val) => {
        return balance += val;
    };
    // deposit20 closure
    const deposit20 = () => changeBal(20);
    const withdrawl20 = () => changeBal(-20);
    const check = () => balance;
    
    return {
        // deposit20: deposit20,
        // withdrawl20: withdrawl20,
        // check: check
        deposit20,
        withdrawl20,
        check
    };
}

let wallet = budget();
console.log(wallet);
wallet.deposit20();
console.log(wallet.check());
wallet.withdrawl20();
wallet.deposit20();
wallet.deposit20();
console.log(wallet.check());
