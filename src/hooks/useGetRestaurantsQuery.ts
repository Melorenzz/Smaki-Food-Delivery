import {RestaurantsService} from "../services/restaurants.service.ts";
import {useQuery} from "@tanstack/react-query";

export const useGetTopRestaurantsQuery = () => {
    return useQuery({
        queryKey: ['top-restaurants'],
        queryFn: () => RestaurantsService.getTopRestaurants(),
    })
}