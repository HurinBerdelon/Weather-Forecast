import { Star } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'
import { useFavorite } from '../../hooks/useFavorites';
import { useWeather } from '../../hooks/useWeather';
import { Container } from "./style";

export function FavoriteStar(): JSX.Element {

    const { favorites, saveNewFavorite, deleteFavorite } = useFavorite()
    const { place } = useWeather()

    // checks if the current place is in favorite list
    const favorite = favorites?.find(item => item.label === place.label)

    // if it is a favorite, return a yellow start with feature of removing from favorites
    if (favorite) {
        return (
            <Container>
                <Star
                    weight='fill'
                    className='isFavorite'
                    onClick={() => deleteFavorite(favorite.id)}
                />
            </Container>
        )
    }

    // if it is not a favorite, return a black start with the feature of adding to favorite
    return (
        <Container>
            <Star
                className='notFavorite'
                onClick={() => saveNewFavorite({
                    id: uuidv4(),
                    label: place.label as string
                })}
            />
        </Container>
    )
}