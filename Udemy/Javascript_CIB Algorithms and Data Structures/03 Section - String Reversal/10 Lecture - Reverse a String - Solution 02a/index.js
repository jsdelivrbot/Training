// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(inputString) {
    var reverseArray = [];
    var splitInputArray = inputString.split("");
    for(let i = splitInputArray.length - 1 ; i >= 0; i -= 1){
        reverseArray.push(splitInputArray[i]);
    }
    var reverseArrayJoined = reverseArray.join("");
    return reverseArrayJoined;
}

module.exports = reverse;

console.log(reverse("apple"));