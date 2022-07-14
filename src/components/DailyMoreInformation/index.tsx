import { Sun, SunHorizon, Wind, ArrowFatDown, ArrowFatUp, DropHalf } from 'phosphor-react'
import { useWeather } from '../../hooks/useWeather';
import { Container } from "./style";

export function DailyMoreInformation(): JSX.Element {

    const { dayOnScreen, forecast } = useWeather()

    // returns a fragment if forecast state was not set yet, what means there was no searchs yet
    if (!forecast.current) {
        return <></>
    }

    // For the dayOnScreen:
    // return information about rain probability, max and min temperature, wind speed, humidity and sunrise and sunset times
    // Its separeted in three columns (leftBox, middleBox and rightBox divs) to better visualization
    return (
        <Container>
            <div className='leftBox'>
                <div>
                    <img
                        src={`${import.meta.env.VITE_OPEN_WEATHER_ICON}/${dayOnScreen.weather.icon}.png`}
                        alt={dayOnScreen.weather.main}
                    />
                    <p>Rain prob: <span>{Math.round(dayOnScreen.pop * 100)} %</span></p>
                </div>
                <div>
                    <ArrowFatUp />
                    <p>Max: <span>{dayOnScreen.temp.max} ºC</span></p>
                </div>
                <div>
                    <ArrowFatDown />
                    <p>Min: <span>{dayOnScreen.temp.min} ºC</span></p>
                </div>
            </div>

            <div className='middleBox'>
                <div>
                    <Wind />
                    <p>Wind: <span>{dayOnScreen.wind_speed} m/s</span></p>
                </div>
                <div>
                    <DropHalf />
                    <p>Humidity: <span>{dayOnScreen.humidity}%</span></p>
                </div>

            </div>

            <div className='rightBox'>
                <div>
                    <Sun />
                    <p>Sunrise: <span>{dayOnScreen.sunrise}</span></p>
                </div>

                <div>
                    <SunHorizon />
                    <p>Sunset: <span>{dayOnScreen.sunset}</span></p>
                </div>
            </div>
        </Container>
    )
}