import axios from "axios";

export const weather_api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/3.0'
})