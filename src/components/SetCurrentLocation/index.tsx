import { Crosshair } from "phosphor-react"
import { useWeather } from "../../hooks/useWeather"
import { Container } from "./style"

export function SetCurrentLocation(): JSX.Element {

    const { setCoordinates } = useWeather()

    // function that gets the current position of the user, based on their browser geolocation
    function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition((position) => {

            setCoordinates({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        })
    }

    return (
        <Container>
            <button
                type='button'
                onClick={getCurrentPosition}
            >
                <Crosshair />
            </button>
        </Container>
    )
}