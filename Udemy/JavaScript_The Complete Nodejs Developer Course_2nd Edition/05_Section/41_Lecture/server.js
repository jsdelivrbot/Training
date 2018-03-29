const express = require('express');

// make app
const app = express();

// setup route handlers
// first is the route, second is the functino to run
// second function params are req, res
// route route
app.get('/', (req, res) => {
    // response from route 
    // res.send('<h1>Hello Express!</h1>')
    res.send({
        name: 'Seth Borne',
        likes: [ 'coding', 'coffee']
    })
})
// return html
app.get('/about', (req, res) => {
    res.send('About Page')
})

// new route
app.get('/bad', (req, res) => {
    res.send({
        error: 'Error Handling Request'
    })
})

app.listen(3000);
console.log('Listening on Port 3000');