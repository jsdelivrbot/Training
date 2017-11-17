// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(inputString) {
    let reversedString = "";
    for(let char of inputString){
        console.log(char + reversedString);
        reversedString = char + reversedString;
    }
    return reversedString;
}

module.exports = reverse;

console.log(reverse("apple"));