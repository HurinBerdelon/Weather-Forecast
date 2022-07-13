import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { weather_api } from "../services/weather_api";
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

interface CoordinatesProps {
    lat: number
    lng: number
}

// interface typing the information needed from the API
interface ForecastProps {
    lat: number
    lng: number
    timezone: string
    current: {
        dt: string
    },
    hourly: {
        dt: string
        temp: number
        pop: number
    }[],
    daily: DayProps[],
    alerts: {
        sender_name: string
        start: string
        end: string
        event: string
        description: string
    }[]
}

interface DayProps {
    dt: string
    weekDay: string
    humidity: number
    wind_speed: number
    sunrise: string
    sunset: string
    temp: {
        min: number
        max: number
    },
    pop: number,
    weather: {
        main: string
        icon: string
    }
}

interface WeatherContextProps {
    forecast: ForecastProps
    coordinates: CoordinatesProps
    dayOnScreen: DayProps
    place: PlaceProps
    setPlace(place: PlaceProps): void
    setDayOnScreen(dayOnScreen: DayProps): void
    setCoordinates(coordinates: CoordinatesProps): void
    getForecast(lat: number, lng: number): void
}

interface WeatherProviderProps {
    children: ReactNode
}

interface PlaceProps {
    label: string
}

// Creates a context to handle the states of weather forecast
const WeatherContext = createContext<WeatherContextProps>({} as WeatherContextProps)

// Creates a provider for forecast context
export function WeatherProvider({ children }: WeatherProviderProps): JSX.Element {

    // states to store the forecast object, created based on OpenWeatherAPI response
    // and state to save the coordinates
    // and state to save the day that is on the screen
    const [forecast, setForecast] = useState<ForecastProps>({} as ForecastProps)
    const [coordinates, setCoordinates] = useState<CoordinatesProps>({} as CoordinatesProps)
    const [dayOnScreen, setDayOnScreen] = useState<DayProps>({} as DayProps)
    const [place, setPlace] = useState<PlaceProps>({} as PlaceProps)

    // everytime a user types a new address in the input, the coordinates state will be updated
    // so, the API is called the update the forecast state
    // It only calls the API if coordinates has valid values, to avoid calling the API with undefined lat and lng
    useEffect(() => {
        if (coordinates.lat) getForecast(coordinates.lat, coordinates.lng)
    }, [coordinates])

    // main function of the context, it call the API and mount the forecastObject formatted to be used in the app,
    // based on the response
    async function getForecast(lat: number, lng: number) {

        // OpenWeather API Call
        const { data } = await weather_api.get(
            `/onecall?lat=${lat}&lon=${lng}&exclude=minutely&units=metric&appid=${import.meta.env.VITE_OPEN_WEATHER_KEY}`
        )

        // Format the object
        const forecastObject: ForecastProps = {
            alerts: data.alerts,
            lat: data.lat,
            lng: data.lon,
            timezone: data.timezone,
            current: { dt: dayjs.unix(data.current.dt).local().format('HH:mm:ss DD/MM/YYYY') },
            daily: data.daily.map((day: any) => {
                return {
                    dt: dayjs.unix(day.dt).local().format('DD/MM'),
                    weekDay: dayjs.unix(day.dt).local().format('dddd'),
                    humidity: day.humidity,
                    wind_speed: day.wind_speed,
                    sunrise: dayjs.unix(day.sunrise).local().format('HH:mm:ss DD/MM/YYYY'),
                    sunset: dayjs.unix(day.sunset).local().format('HH:mm:ss DD/MM/YYYY'),
                    temp: {
                        min: Math.round(day.temp.min),
                        max: Math.round(day.temp.max),
                    },
                    pop: day.pop,
                    weather: {
                        main: day.weather[0].main,
                        icon: day.weather[0].icon,
                    }
                }
            }),
            hourly: data.hourly.map((hour: any) => {
                return {
                    dt: dayjs.unix(hour.dt).local().format('HH:mm:ss DD/MM/YYYY'),
                    temp: Math.round(hour.temp),
                    pop: hour.pop,
                }
            })
        }

        // after formating the object, it updates the states
        setForecast(forecastObject)
        setDayOnScreen(forecastObject.daily[0])
    }

    return (
        <WeatherContext.Provider
            value={{
                forecast,
                coordinates,
                dayOnScreen,
                place,
                setPlace,
                setDayOnScreen,
                setCoordinates,
                getForecast
            }}
        >
            {children}
        </WeatherContext.Provider>
    )
}

// Creates a hook to get the functions and the state of the context easily
export function useWeather() {
    return useContext(WeatherContext)
}