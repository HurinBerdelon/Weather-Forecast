import { Star } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'
import { useFavorite } from '../../hooks/useFavorites';
import { Container } from "./style";

interface FavoriteStarProps {
    label?: string
}

export function FavoriteStar({ label }: FavoriteStarProps): JSX.Element {

    const { favorites, saveNewFavorite, deleteFavorite } = useFavorite()

    const favorite = favorites?.find(item => item.label === label)

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

    return (
        <Container>
            <Star
                className='notFavorite'
                onClick={() => saveNewFavorite({
                    id: uuidv4(),
                    label: label as string
                })}
            />
        </Container>
    )
}