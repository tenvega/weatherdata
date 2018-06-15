import axios from 'axios';

const API_KEY = '89b6d701c4f91cc3d3254c8c1a609f9e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
