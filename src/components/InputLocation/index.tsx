import { useEffect, useState } from "react";
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import { Container } from "./style";

interface PlaceProps {
    label: string
    value: {
        description: string
        place_id: string
    }
}

interface CoordinatesProps {
    lat: number
    lng: number
}

export function InputLocation(): JSX.Element {

    // States to store the place object returned by google-place-autocomplete
    // and the coordinates of latitude and longitude
    const [place, setPlace] = useState<PlaceProps>()
    const [coordinates, setCoordinates] = useState<CoordinatesProps>()

    // function that gets the current position of the user, based on their browser geolocation
    function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition((position) => {

            setCoordinates({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        })
    }

    // Everytime the place changes, call the function that returns the coordinates of that place
    // only executes if the place exists, because when the page is mounted, 
    // place is undefined, which means it has no property label
    useEffect(() => {
        if (place) {
            geocodeByAddress(place.label)
                .then(response => getLatLng(response[0])
                    .then(response => setCoordinates(response))
                )
        }
    }, [place])

    // render the component of google-place-autocomplete and a button to get the current location
    return (
        <Container>
            <GooglePlacesAutocomplete
                apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
                debounce={500}
                selectProps={{ place, onChange: setPlace }}
            />
            <button
                onClick={getCurrentPosition}
            >
                Posição atual
            </button>
        </Container>
    )
}