import { CloudSun } from 'phosphor-react'
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

    return (
        <Container
            onClick={() => setDayOnScreen(dailyWeather)}
        >
            <div className={dayOnScreen === dailyWeather ? 'active' : ''}>
                <CloudSun />
                <span className='weather'>{dailyWeather.weather.main}</span>
                <p className='temperature'>max: <span>{dailyWeather.temp.max} ºC </span></p>
                <p className='temperature'>min: <span>{dailyWeather.temp.min} ºC </span></p>
                <p className='weekday'>{dailyWeather.weekDay}</p>
                <p className='date'>{dailyWeather.dt}</p>
            </div>
        </Container>
    )
}