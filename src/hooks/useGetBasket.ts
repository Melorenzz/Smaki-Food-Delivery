import {useQuery} from "@tanstack/react-query";
import {BasketService} from "../services/basket.service.ts";

export const useGetBasket = (isAuthenticated: boolean) => {
    return useQuery({
        queryKey: ['getBasket'],
        queryFn: () => BasketService.getBasket(),
        enabled: isAuthenticated,
    })
}