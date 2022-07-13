import { Container } from "./style";

interface SelectorButtonProps {
    isShowingMoreInformation: boolean
    setIsShowingMoreInformation(isShowingMoreInformation: boolean): void
}

export function SelectorButtons({ isShowingMoreInformation, setIsShowingMoreInformation }: SelectorButtonProps): JSX.Element {

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