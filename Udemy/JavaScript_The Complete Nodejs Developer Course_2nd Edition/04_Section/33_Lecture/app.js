const yargs = require('yargs');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }
    else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});