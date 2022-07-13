import { useWeather } from "../../hooks/useWeather";
import { DailyCard } from "../DailyCard";
import { Container } from "./style";

export function WeeklyWeather(): JSX.Element {

    const { forecast } = useWeather()

    // render a dailyCard for each element in daily array of forecast
    return (
        <Container>
            {forecast.daily?.map(day => (
                <DailyCard
                    key={day.dt}
                    dailyWeather={day}
                />

            ))}
        </Container>
    )
}