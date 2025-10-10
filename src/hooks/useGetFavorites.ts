import {useQuery} from "@tanstack/react-query";
import {FavoritesService} from "../services/favorites.service.ts";

export const useGetFavorites = () => {
    return useQuery({
        queryKey: ['getFavorites'],
        queryFn: () => FavoritesService.getAllFavorites()
    })
}