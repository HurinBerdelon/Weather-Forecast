import { Crosshair } from "phosphor-react"
import { geocodeByLatLng } from "react-google-places-autocomplete"
import { useWeather } from "../../hooks/useWeather"
import { Container } from "./style"

export function SetCurrentLocation(): JSX.Element {

    const { setCoordinates, setPlace } = useWeather()

    // function that gets the current position of the user, based on their browser geolocation
    function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition((position) => {

            setCoordinates({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })

            // When geting the coordinates with browser location API it search for the location
            // by LatLong and sets the place to the formatted address
            // geocodeByLatLng returns an array of locations, where the last element of the array is a very general address (country level)
            // checking some returns, the 5 element counting from the end to the begin, is a district level address, so I chose to use it
            // if the return has length less then 6, the place state is set with the last element. 
            geocodeByLatLng({ lat: position.coords.latitude, lng: position.coords.longitude })
                .then(response => {
                    if (response[response.length - 6]) setPlace({ label: response[response.length - 6].formatted_address })
                    else setPlace({ label: response[response.length - 1].formatted_address })
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