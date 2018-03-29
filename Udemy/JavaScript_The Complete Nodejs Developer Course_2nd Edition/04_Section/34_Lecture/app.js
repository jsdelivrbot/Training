const request = require('request');
const yargs = require('yargs');
const api_key = require('./api_key/api_key.js')
const geocode = require('./geocode/geocode.js')

// node app.js --address=''
const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Please enter the address you want to Fetch Weather for',
        string: true,
    }
})
.help()
.alias('help', 'h')
.argv;

let location = geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }
    else {
        console.log(JSON.stringify(results, undefined, 2));
        return JSON.stringify(results, undefined, 2)
    }
});
// console.log(location);
// console.log(api_key.module.weatherAPI);
// console.log(`https://api.darksky.net/forecast/${api_key.module.weatherAPI}/`);

// ${location.lat},${location.long}
request({
    url: `https://api.darksky.net/forecast/${api_key.module.weatherAPI}/47.6600087,-122.3425575`,
    json: true
}, (error, response, body) => {
    // error handling
    if(!error && response.statusCode === 200){
        console.log(body.currently.temperature);
    }
    else {
        console.log('Unable to Fetch Weather');
    }
})
