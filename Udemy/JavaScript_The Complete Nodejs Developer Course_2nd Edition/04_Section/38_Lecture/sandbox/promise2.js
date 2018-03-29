// load request module
const request = require('request')
// load my API key
const api_key = require('../api_key/api_key.js')

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        const encodeAddress = encodeURIComponent(address);
        // console.log(`http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&${api_key.module.api}`);
        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&${api_key.module.api}`,
            json: true 
        }, (error, response, body) => {
            if(error){
                reject('Unable to Connect to Google Server')
            }
            else if(body.status === 'ZERO_RESULTS'){
                reject('No results for your Query, Please try again');
            }
            else if(body.status === 'OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    lat: `${response.body.results[0].geometry.location.lat}`,
                    long: `${response.body.results[0].geometry.location.lng}`
                });
            }
        })
    })
};

geocodeAddress('19146').then(
    (location) => {
        console.log('Location is: ', JSON.stringify(location, undefined, 2));
    }, 
    (errorMessage) => {
        console.log('Error: ', errorMessage);
    }
)