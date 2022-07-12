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

    const [place, setPlace] = useState<PlaceProps>()
    const [coordinates, setCoordinates] = useState<CoordinatesProps>()

    useEffect(() => {
        if (place) {
            geocodeByAddress(place.label)
                .then(response => getLatLng(response[0])
                    .then(response => setCoordinates(response))
                )
        }
    }, [place])

    return (
        <Container>
            <GooglePlacesAutocomplete
                apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
                debounce={500}
                selectProps={{ place, onChange: setPlace }}
            />
        </Container>
    )
}