import { useWeather } from "../../hooks/useWeather";
import { Container } from "./style";

export function CurrentLocation(): JSX.Element {

    const { place } = useWeather()

    // returns only a fragment if the place is not known
    if (!place.label) {
        return <></>
    }

    // returns the current place 
    return (
        <Container>
            <h2>{place.label}</h2>
        </Container>
    )
}