import { useWeather } from "../../hooks/useWeather";
import { InfoAboutAlerts } from "./InfoAboutAlerts";
import { Container } from "./style";

export function Sidebar(): JSX.Element {

    const { forecast } = useWeather()

    // returns a fragment if forecast has no alerts
    if (!forecast.alerts) {
        return <></>
    }

    // if there is some alerts, map into its array, returning information about who send the alert, its event, start and end date
    return (
        <Container>
            <h2>
                Alerts
                <InfoAboutAlerts />
            </h2>
            {forecast.alerts?.map((alert, index) => (
                <div key={index} className="alert">
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