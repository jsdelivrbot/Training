
// weather.changeLocation('Decatur', 'IN')

// instantiate Storage
const storage = new LocalStorage();

// get stored location data
const weatherLocation = storage.getLocationData();
console.log("weatherLoc", weatherLocation);

// instantiate Weather object
// const weather = new Weather('Boston', 'MA');
const weather = new Weather(weatherLocation.city, weatherLocation.state)

// instantiate ui here:
const ui = new UI();

// this event listener will call the function when the DOM loads
document.addEventListener('DOMContentLoaded', getTheWeatherInfo)

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    // console.log(city, state);
    weather.changeLocation(city, state);
    
    // Set location in LS
    storage.setLocationData(city, state);
    
    // Get and display weather
    // getWeather();
    getTheWeatherInfo()
    
    // Close Modal
    $('#locModal').modal('hide');
});


// promise
function getTheWeatherInfo(){
    weather.getWeather()
        .then(results => 
            // console.log(results)
            // instead of logging, paint the DOM
            ui.paint(results)
        )
        .catch(err => console.log(err))
}