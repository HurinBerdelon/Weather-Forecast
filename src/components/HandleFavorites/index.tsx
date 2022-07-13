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
                    <CaretDown />
                </Menu.Button>
                <Menu.Items className='menuItems'>
                    <Menu.Item>
                        <div className='favorite'>
                            <button
                                onClick={() => setPlace({ label: 'Rio de Janeiro, Rj, Brasil' })}
                            >
                                Rio de Janeiro, Rj, Brasil
                            </button>
                            <Trash
                                onClick={() => deleteFavorite('id')}
                            />
                        </div>
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </Container>
    )
}