import axios from "axios";

// Creates axios instance to access OpenWeatherAPI
export const weather_api = axios.create({
    baseURL: import.meta.env.VITE_OPEN_WEATHER_ENDPOINT
})