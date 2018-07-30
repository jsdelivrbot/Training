import getAPIKey from '../api_key/api_key'
import axios from 'axios'

const API_KEY = getAPIKey();
// console.log(API_KEY);

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// q=London,us&mode=xml&appid=b6907d289e10d714a6e88b30761fae22

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(cityName){
  const url = `${ROOT_URL}&q=${cityName},us`;
  //ajax
  const request = axios.get(url)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}