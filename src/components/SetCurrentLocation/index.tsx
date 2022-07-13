import { Crosshair } from "phosphor-react"
import { Container } from "./style"

interface CoordinatesProps {
    lat: number
    lng: number
}

interface CurrentLocationProps {
    setCoordinates(coordinates: CoordinatesProps): void
}

export function SetCurrentLocation({ setCoordinates }: CurrentLocationProps): JSX.Element {

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