import {useMutation, useQueryClient} from "@tanstack/react-query";
import {BasketService} from "../services/basket.service.ts";
import type {IProductCard} from "../types/types.ts";


export const useBasketAction = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['BasketAction'],
        mutationFn: (data: IProductCard) => BasketService.basketAction(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getBasket'] });
        }
    })
}