// this is the api call
const apiKeyVal = apiKey.getAPIKey()

class Weather {
    constructor(city, state){
        this.city = city;
        this.state = state;
    }
    
    // Fetch Weather From API
    async getWeather(){
        const response = await fetch(`http://api.wunderground.com/api/${apiKeyVal}/conditions/q/${this.state}/${this.city}.json`)
        // http://api.wunderground.com/api/07a9a7b729725873/conditions/q/CA/San_Francisco.json
        const responseData = await response.json();
        
        console.log(responseData.current_observation);
        
        return responseData.current_observation;
    }
    
    // Change Weather Location
    
    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}