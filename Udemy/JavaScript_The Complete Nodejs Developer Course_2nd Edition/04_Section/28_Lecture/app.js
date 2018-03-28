const request = require('request');

request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=2500%20N%2050th%20Street%20Seattle`,
    json: true
    }, (error, response, body) => {
    // error, response, body
    console.log(body);
})