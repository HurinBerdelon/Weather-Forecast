import { useWeather } from '../../hooks/useWeather';
import { Container } from "./style";

interface DailyCardProps {
    dailyWeather: {
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
}

export function DailyCard({ dailyWeather }: DailyCardProps): JSX.Element {

    const { dayOnScreen, setDayOnScreen } = useWeather()

    // returns a card with daily information about max and min temperature, the main weather of the day,
    // the day of the week and day of the month
    // if the day received as props is equal to day on screen, give the component a active class, to different style
    return (
        <Container
            onClick={() => setDayOnScreen(dailyWeather)}
        >
            <div className={dayOnScreen === dailyWeather ? 'active container' : 'container'}>
                <p className='weekday'>{dailyWeather.weekDay}</p>
                <p className='date'>{dailyWeather.dt}</p>
                <div className='imageContainer'>
                    <img
                        src={`${import.meta.env.VITE_OPEN_WEATHER_ICON}/${dailyWeather.weather.icon}.png`}
                        alt={dailyWeather.weather.main}
                    />
                </div>
                <span className='weather'>{dailyWeather.weather.main}</span>
                <p className='temperature'>max: <span>{dailyWeather.temp.max} ºC </span></p>
                <p className='temperature'>min: <span>{dailyWeather.temp.min} ºC </span></p>
            </div>
        </Container>
    )
}