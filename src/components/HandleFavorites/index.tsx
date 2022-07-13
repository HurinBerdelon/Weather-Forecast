import { CaretDown, Trash } from 'phosphor-react'
import { Menu } from '@headlessui/react'
import { Container } from "./style"
import { useFavorite } from '../../hooks/useFavorites'
import { useWeather } from '../../hooks/useWeather'

export function HandleFavorites(): JSX.Element {

    const { favorites, deleteFavorite } = useFavorite()
    const { setPlace } = useWeather()

    // render a menu from headlessui, check https://headlessui.com/react/menu for the docs
    return (
        <Container>
            <Menu>
                {/* the button is just a icon with a text */}
                <Menu.Button>
                    <div className="favoritesButton">
                        Favorites
                        <CaretDown />
                    </div>
                </Menu.Button>
                {/* the items are showed in absolute position when clicking the button */}
                <Menu.Items className='menuItems'>
                    {/* if there is no favorite yet, returns a message of how to add new places to favorites */}
                    {favorites.length === 0
                        ? <p>No Favorites Yet <span>you can save new favorites clicking in the star.</span></p>
                        // if there is favorites, map its array showing the elements in the screen
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
                                        <button>
                                            <Trash
                                                onClick={() => deleteFavorite(favorite.id)}
                                            />
                                        </button>
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