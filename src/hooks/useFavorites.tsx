import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { favoriteKey } from "../config/localstorageKeys";

interface FavoriteProviderProps {
    children: ReactNode
}

interface FavoriteProps {
    id: string
    label: string
}

interface FavoritesContextProps {
    favorites: FavoriteProps[]
    saveNewFavorite(favorite: FavoriteProps): void
    deleteFavorite(id: string): void
}

// Creates a context to favorite locations
const FavoritesContext = createContext<FavoritesContextProps>({} as FavoritesContextProps)

// Creates a provider for favorite locations context
export function FavoritesProvider({ children }: FavoriteProviderProps): JSX.Element {

    // State to keep favorites in memory
    const [favorites, setFavorites] = useState<FavoriteProps[]>([])

    // Everytime the page loads, check the localstorage for the favorites, with a key configured in config folder
    useEffect(() => {
        const result = localStorage.getItem(favoriteKey)
        if (result) setFavorites(JSON.parse(result))
    }, [])

    // Save the favorites in the localStorage everytime it changes
    useEffect(() => {
        if (favorites.length > 0) {
            localStorage.setItem(
                favoriteKey,
                JSON.stringify(favorites)
            )
        }
    }, [favorites])

    // Save new favorite function updates the state with the old favorites and the new one and save in the localstorage
    function saveNewFavorite(favorite: FavoriteProps) {
        setFavorites(prevFavorites => [...prevFavorites, favorite])
    }

    // delete favorite function update the state with the old favorites removing the one user wants to delete
    // and save in the localstorage
    function deleteFavorite(id: string) {
        const itemBeingDeletedIndex = favorites.findIndex(favorite => favorite.id === id)
        const tmpFavorites = [...favorites]
        tmpFavorites.splice(itemBeingDeletedIndex, 1)

        setFavorites(tmpFavorites)
    }

    return (
        <FavoritesContext.Provider
            value={{ favorites, saveNewFavorite, deleteFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}

// Creates a hook to get the functions and the state of the context easily
export function useFavorite() {
    return useContext(FavoritesContext)
} 