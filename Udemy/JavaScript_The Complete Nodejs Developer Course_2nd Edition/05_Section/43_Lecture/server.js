const express = require('express');
const hbs = require('hbs');
// make app
const app = express();

const getYear = new Date().getFullYear();


// view engine
app.set('view engine', 'hbs');

// middleware
// static absolute path to the folder you want to use
// __dirname 
app.use(express.static(__dirname + '/public'))

// setup route handlers
// first is the route, second is the functino to run
// second function params are req, res
// route route
app.get('/', (req, res) => {
    // response from route 
    // res.send('<h1>Hello Express!</h1>')
    // res.send({
    //     name: 'Seth Borne',
    //     likes: [ 'coding', 'coffee']
    // })
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to the Home Page', 
        currentYear: getYear
        
    })
})
// return html
app.get('/about', (req, res) => {
    // res.send('About Page')
    // second param is the object for data
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: getYear
    })
})

// new route
app.get('/bad', (req, res) => {
    res.send({
        error: 'Error Handling Request'
    })
})
// second param, for the clog
app.listen(3000, () => {
    console.log('Listening on Port 3000');
});

// new template for root
// home.hbs
// h1 and footer welcome message - inside p tag
