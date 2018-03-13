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

// char sets using Brackets []
// character sets
// [has to be one of whatever is in here]
// re = /gr[ae]y/i;

re = /[GF]ray/;
re = /[GF]ray/i;
// Match anything except G or F (inside excludes)
re = /[^GF]ray/i;
// outside would mean start with
re = /^[GF]ray/i;

// match any uppercase
re = /[A-Z]ray/;

// match any lowercase
re = /[a-z]ray/;

// match any lowercase
re = /[A-Za-z]ray/;

// match any digit
re = /[0-9]ray/;
// match two any digits
re = /[0-9][0-9]ray/;

// Braces are quantifies - {};
// Must occur exactly {m} amount of times;
re = /hel{2}o/i;
// Must occur between {m, n} amount of times;
re = /hel{2,4}o/i;
// Must occur at least {m, n} amount of times;
re = /hel{2,}o/i;


// Parens () - Grouping
// match all start with 3x, three times
re = /([0-9]x){3}/;
// exactly 3x, three times
re = /^([0-9]x){3}$/;




// String to match
const str = '3x3x3x3x';

// const str = 'Hellllllllo';
// const str = 'Heello';
// const str = '15ray?';
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