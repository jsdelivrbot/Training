import getAPIKey from '../api_key/api_key'

const API_KEY = getAPIKey();
// console.log(API_KEY);

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(cityName){
  const url = `${ROOT_URL}&q=${cityName},us`;
  const request = axios.get(url)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}