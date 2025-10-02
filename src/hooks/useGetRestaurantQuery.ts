





import {useQuery} from "@tanstack/react-query";
import {RestaurantsService} from "../services/restaurants.service.ts";

export const useGetRestaurantQuery = (id: string) => {
    return useQuery({
        queryKey: ['get restaurant', id],
        queryFn: () => RestaurantsService.getRestaurant(id),
        enabled: !!id,
    })
}