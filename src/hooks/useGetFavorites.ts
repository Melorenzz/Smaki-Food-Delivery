import {useQuery} from "@tanstack/react-query";
import {FavoritesService} from "../services/favorites.service.ts";
import {store} from "../store.ts";

export const useGetFavorites = () => {
    const isAuthenticated = store(state => state.isAuthenticated);
    return useQuery({
        queryKey: ['getFavorites'],
        queryFn: () => FavoritesService.getAllFavorites(),
        enabled: isAuthenticated,
    })
}