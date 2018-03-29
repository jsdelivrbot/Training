const request = require('request');
const api_key = require('../api_key/api_key.js')


// console.log(argv);

geocodeAddress = (address, callback) => {
    const encodeAddress = encodeURIComponent(address);
    // console.log(api_key);
    // console.log(`http://maps.googleapis.com/maps/api/geocode/json?address=2500%20N%2050th%20Street%20Seattle&${api_key.module.api}`);
    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&${api_key.api}`,
        json: true
        }, (error, response, body) => {
        // error, response, body
        // console.log(body);
        // console.log(JSON.stringify(response.body, undefined, 2));
        if(error){
            callback('Unable to Connect to Google Server.');
        }
        else if(body.status === 'ZERO_RESULTS'){
            callback('No results for your Query, Please try again');
        }
        else if(body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: `${response.body.results[0].geometry.location.lat}`,
                long: `${response.body.results[0].geometry.location.lng}`
            })
            // console.log(`${response.body.results[0].formatted_address}`);
            // console.log('Lat: ', `${response.body.results[0].geometry.location.lat}`);
            // console.log('Long: ',  `${response.body.results[0].geometry.location.lng}`);
        }
    })
}

module.exports = {
    geocodeAddress: geocodeAddress,
}

// could do:
// module.exports.geocodeAddress = geocodeAddress;