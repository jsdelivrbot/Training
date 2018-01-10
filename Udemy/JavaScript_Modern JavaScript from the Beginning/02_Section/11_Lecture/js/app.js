const name = 'John';
const age = '31';
const job = 'Web Developer';
const city = 'Miami';
let html;

// no template strings
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>'

// break lines with additional +'s 
// html = '<ul>' + 
// '<li>Name: ' + name + '</li>' + 
// '<li>Age: ' + age + '</li>' + 
// '<li>Job: ' + job + '</li>' +
// '<li>City: ' + city + '</li>' + 
// '</ul>'

function callMe(){
    return 'maybe';
}

html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li>
    <li>${callMe()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
</ul>
`

document.body.innerHTML = html;