import { useWeather } from "../../hooks/useWeather";
import { DailyCard } from "../DailyCard";
import { Container } from "./style";

export function WeeklyWeather(): JSX.Element {

    const { forecast } = useWeather()

    return (
        <Container>
            {forecast.daily?.map(day => (
                <DailyCard
                    dailyWeather={day} />

            ))}
        </Container>
    )
}