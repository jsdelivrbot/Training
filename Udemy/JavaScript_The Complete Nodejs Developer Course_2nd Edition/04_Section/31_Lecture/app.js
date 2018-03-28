const request = require('request');
const api_key = require('./api_key/api_key.js')

const yargs = require('yargs');

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

console.log(argv);
const encodeAddress = encodeURIComponent(argv.address);

// console.log(api_key);
// console.log(`http://maps.googleapis.com/maps/api/geocode/json?address=2500%20N%2050th%20Street%20Seattle&${api_key.module.api}`);
request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&${api_key.api}`,
    json: true
    }, (error, response, body) => {
    // error, response, body
    // console.log(body);
    // console.log(JSON.stringify(response.body, undefined, 2));
    console.log(`${response.body.results[0].formatted_address}`);
    console.log('Lat: ', `${response.body.results[0].geometry.location.lat}`);
    console.log('Long: ',  `${response.body.results[0].geometry.location.lng}`);
})
