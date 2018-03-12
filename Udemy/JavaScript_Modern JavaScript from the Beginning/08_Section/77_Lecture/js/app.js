// instatntiage Westher object
const weather = new Weather('Boston', 'MA');

// weather.changeLocation('Decatur', 'IN')

// this event listener will call the function when the DOM loads
document.addEventListener('DOMContentLoaded', getTheWeatherInfo)

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