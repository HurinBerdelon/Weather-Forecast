import { DailyCard } from "../DailyCard";
import { Container } from "./style";

export function WeeklyWeather(): JSX.Element {

    const dailyWeather = {
        weather: 'Rain',
        min: '21 ºC',
        max: '24 ºC',
        date: 'Today'
    }

    return (
        <Container>
            <DailyCard dailyWeather={dailyWeather} />
            <DailyCard dailyWeather={dailyWeather} />
            <DailyCard dailyWeather={dailyWeather} />
            <DailyCard dailyWeather={dailyWeather} />
            <DailyCard dailyWeather={dailyWeather} />
            <DailyCard dailyWeather={dailyWeather} />
            <DailyCard dailyWeather={dailyWeather} />
        </Container>
    )
}