import { CaretDown, Trash } from 'phosphor-react'
import { Menu } from '@headlessui/react'
import { Container } from "./style"
import { useFavorite } from '../../hooks/useFavorites'


interface HandleFavoritesProps {
    setPlace(place: { label: string }): void
}

export function HandleFavorites({ setPlace }: HandleFavoritesProps): JSX.Element {

    const { favorites, deleteFavorite } = useFavorite()

    return (
        <Container>
            <Menu>
                <Menu.Button>
                    <div className="favoritesButton">
                        Favorites
                        <CaretDown />
                    </div>
                </Menu.Button>
                <Menu.Items className='menuItems'>
                    {favorites.length === 0
                        ? <p>No Favorites Yet <span>you can save new favorites clicking in the star.</span></p>
                        : (
                            favorites.map(favorite => (
                                <Menu.Item
                                    key={favorite.id}
                                >
                                    <div className='favorite'>
                                        <button
                                            onClick={() => setPlace({ label: favorite.label })}
                                        >
                                            {favorite.label}
                                        </button>
                                        <Trash
                                            onClick={() => deleteFavorite(favorite.id)}
                                        />
                                    </div>
                                </Menu.Item>
                            ))
                        )
                    }

                </Menu.Items>
            </Menu>
        </Container>
    )
}