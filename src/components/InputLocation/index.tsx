import { useEffect } from "react";
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import { useWeather } from "../../hooks/useWeather";
import { SetCurrentLocation } from "../SetCurrentLocation";
import { FavoriteStar } from "../FavoriteStar";
import { HandleFavorites } from "../HandleFavorites";
import { Container } from "./style";

export function InputLocation(): JSX.Element {

    const { setCoordinates, place, setPlace } = useWeather()

    // Everytime the place changes, call the function that returns the coordinates of that place
    // only executes if the place exists, because when the page is mounted, 
    // place is undefined, which means it has no property label
    useEffect(() => {
        if (place.label) {
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

            <SetCurrentLocation />

            <FavoriteStar label={place?.label} />
            <HandleFavorites setPlace={setPlace} />
        </Container>
    )
}