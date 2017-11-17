// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(inputString) {
    let reversedString = [];
    inputString = inputString.split("");
    let j = 0;
    for(let i = inputString.length - 1; i >= 0 ; i -= 1){
        reversedString.splice(j, 1, inputString[i]); 
        j += 1;
    }
    console.log(reversedString);
    reversedString = reversedString.join("");
    return reversedString;
}

module.exports = reverse;

console.log(reverse("apple"));