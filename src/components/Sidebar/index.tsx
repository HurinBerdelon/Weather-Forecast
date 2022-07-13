import { useWeather } from "../../hooks/useWeather";
import { Container } from "./style";

export function Sidebar(): JSX.Element {

    const { forecast } = useWeather()

    if (!forecast.alerts) {
        return <></>
    }

    return (
        <Container>
            <h2>Alerts</h2>
            {forecast.alerts?.map(alert => (
                <div className="alert">
                    <h3>Sender: <span>{alert.sender_name}</span></h3>
                    <p>Event: <span>{alert.event}</span></p>
                    <p>Start: <span>{alert.end}</span></p>
                    <p>End: <span>{alert.end}</span></p>
                    <p className="description">
                        {alert.description}
                    </p>
                </div>
            ))}
        </Container>
    )
}