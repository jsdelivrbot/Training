async function asyncOne(){
    return 'one';
}

// asyncOne().then(response => console.log(response))

async function asyncTwo(){
    // throw new Error('Issue with Async!');
    return 'two';
}

asyncTwo().catch(error => console.log(error));

async function asyncThree(){
    // const one = await setTimeout(asyncOne(), 3000);
    const one = await asyncOne();
    console.log(one);
    const two = await asyncTwo();
    console.log(two);
}

asyncThree();

async function asyncFour(){
    const [resOne, resTwo] = await Promise.all(
        [asyncOne(), asyncTwo()]
    )
    console.log(resOne, resTwo);
}

asyncFour();