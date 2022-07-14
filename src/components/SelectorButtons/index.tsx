import { useWeather } from "../../hooks/useWeather";
import { Container } from "./style";

interface SelectorButtonProps {
    isShowingMoreInformation: boolean
    setIsShowingMoreInformation(isShowingMoreInformation: boolean): void
}

export function SelectorButtons({ isShowingMoreInformation, setIsShowingMoreInformation }: SelectorButtonProps): JSX.Element {

    const { forecast } = useWeather()

    // returns a fragment if forecast state was not set yet, what means there was no searchs yet
    if (!forecast.current) {
        return <></>
    }

    // render two buttons, to change between the chart and the more information screen
    return (
        <Container>
            <button
                type="button"
                className={`selectorButton ${isShowingMoreInformation ? '' : 'active'}`}
                onClick={() => setIsShowingMoreInformation(false)}
            >
                Chart
            </button>
            <button
                type="button"
                className={`selectorButton ${isShowingMoreInformation ? 'active' : ''}`}
                onClick={() => setIsShowingMoreInformation(true)}
            >
                More Info
            </button>
        </Container>
    )
}