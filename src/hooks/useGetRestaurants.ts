import {useQuery} from "@tanstack/react-query";
import {RestaurantsService} from "../services/restaurants.service.ts";

export const useGetRestaurants = () => {
    return useQuery({
        queryKey: ['restaurants'],
        queryFn: () => RestaurantsService.getRestaurants()
    })
}