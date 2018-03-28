const request = require('request');
const api_key = require('./api_key/api_key.js')
console.log(api_key);
console.log(`http://maps.googleapis.com/maps/api/geocode/json?address=2500%20N%2050th%20Street%20Seattle&${api_key.module.api}`);
request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=2500%20N%2050th%20Street%20Seattle&${api_key.api}`,
    json: true
    }, (error, response, body) => {
    // error, response, body
    // console.log(body);
    console.log(JSON.stringify(body, undefined, 2));
})
