let re;

// re = /hello/;
re = /hello/i;

// Metacharacter Symbols
// ^ must start with (a h)
re = /^h/i;
// $ must end with (a d)
re = /World$/i;
// must start with and end with
re = /^hello$/i;
// match any one character (.)
re = /h.llo/i;
// match any character 0 or more
re = /h*llo/i;
// optional character
re = /gre?a?y/i;
// escaping characters
re = /gray\?/i

// const str = 'Heello';
const str = 'Grym?';
// const str = 'Hello World';
// const str = 'Seth Hello World';
const result = re.exec(str);
console.log(result);

// create custom function that returns a cleaner result for output
function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does Not match ${re.source}`);
    }
}

reTest(re, str);