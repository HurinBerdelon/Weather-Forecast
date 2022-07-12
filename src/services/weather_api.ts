import axios from "axios";

// Creates axios instance to access OpenWeatherAPI
export const weather_api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/3.0'
})