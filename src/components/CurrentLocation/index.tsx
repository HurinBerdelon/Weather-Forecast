import { useEffect, useState } from "react";
import { geocodeByLatLng } from "react-google-places-autocomplete";
import { useWeather } from "../../hooks/useWeather";
import { Container } from "./style";

export function CurrentLocation(): JSX.Element {

    const { forecast, place } = useWeather()

    if (!place.label) {
        return <></>
    }

    return (
        <Container>
            <h2>{place.label}</h2>
        </Container>
    )
}