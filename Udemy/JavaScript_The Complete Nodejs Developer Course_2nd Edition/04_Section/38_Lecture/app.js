
const yargs = require('yargs');
const axios = require('axios');
const api_key = require('./api_key/api_key.js')

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

// encode address
const encodeAddress = encodeURIComponent(argv.address);

const geocodeURL = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&${api_key.module.api}`
// console.log(geocodeURL);

axios.get(geocodeURL)
    .then(
        (response) => {
            console.log(response.data);
            if(response.data.status === 'ZERO_RESULTS'){
                // console.log('here');
                // this stops the function and prints the error in catch/else
                throw new Error('Unable to find that Address.');
            }
            // here is where we make the connectino for the weather
            const lat = response.data.results[0].geometry.location.lat;
            const long = response.data.results[0].geometry.location.lng;
            const weatherURL = `https://api.darksky.net/forecast/${api_key.module.weatherAPI}/${lat},${long}`
            console.log("Address: ", response.data.results[0].formatted_address);
            // now we can make the second call
            return axios.get(weatherURL)
        }
    )   
    // this then is for the return axios.get(weatherURL)
    .then(
        (response) => {
            // console.log(response.data);
            const temperature = response.data.currently.temperature;
            const apparentTemperature = response.data.currently.apparentTemperature;
            console.log(`It's currently ${temperature}.  It feels like ${apparentTemperature}`);
        }
    )
    .catch(
        (errorMessage) => {
            if(errorMessage.code === 'ENOTFOUND'){
                // this is when the connection doesn't work
                console.log('Unable to connect to maps.google.com');
            }
            else {
                console.log(errorMessage.message);
            }
        }
    );
