
const yargs = require('yargs');
// const api_key = require('./api_key/api_key.js')
const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js')

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }
    else {
        // console.log(JSON.stringify(results, undefined, 2));
        console.log(results.address);
        // weather call here
        weather.getWeather(results.lat, results.long, (errorMessage, weatherResults) => {
            if(errorMessage){
                console.log('Error: ', errorMessage);
            }
            else {
                // console.log('Results: ', JSON.stringify(weatherResults, undefined, 2));
                console.log(`It's currently ${weatherResults.temperature}, but Feels like ${weatherResults.apparentTemp}`);
                return weatherResults;
            }
        });
    }
});
// console.log(location);
// console.log(api_key.module.weatherAPI);
// console.log(`https://api.darksky.net/forecast/${api_key.module.weatherAPI}/`);

// ${location.lat},${location.long}

// (lat, long, callback(errorMessage, results))
// weather.getWeather(47.6600087, -122.3425575, (errorMessage, weatherResults) => {
//     if(errorMessage){
//         console.log('Error: ', errorMessage);
//     }
//     else {
//         console.log('Results: ', JSON.stringify(weatherResults, undefined, 2));
//         return weatherResults;
//     }
// });