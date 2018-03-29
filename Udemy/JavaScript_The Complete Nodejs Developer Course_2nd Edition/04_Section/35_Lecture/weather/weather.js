const request = require('request');
const api_key = require('../api_key/api_key.js')

// lat long, callback(error, results)
var getWeather = (lat, long, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${api_key.module.weatherAPI}/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        // error handling
        if(!error && response.statusCode === 200){
            // console.log(body.currently.temperature, body.currently.apparentTemperature);
            // return body.currently.temperature
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemp: body.currently.apparentTemperature
            });
        }
        else {
            // console.log('Unable to Fetch Weather');
            // return "Unable"
            callback('Unable to Fetch Weather')
        }
    })
}

module.exports.getWeather = getWeather;