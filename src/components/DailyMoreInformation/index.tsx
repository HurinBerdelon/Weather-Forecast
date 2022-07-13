import { Sun, SunHorizon, Wind, ArrowFatDown, ArrowFatUp, DropHalf } from 'phosphor-react'
import { useWeather } from '../../hooks/useWeather';
import { Container } from "./style";

export function DailyMoreInformation(): JSX.Element {

    const { dayOnScreen, forecast } = useWeather()

    if (!forecast.current) {
        return <></>
    }

    return (
        <Container>
            <div className='leftBox'>
                <div>
                    <Sun />
                    <p>Rain prob: <span>{dayOnScreen.pop * 100} %</span></p>
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