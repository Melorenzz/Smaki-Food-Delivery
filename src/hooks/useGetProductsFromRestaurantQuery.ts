import {useQuery} from "@tanstack/react-query";
import {ProductService} from "../services/products.service.ts";

export const useGetProductsFromRestaurantQuery = (id: string) => {
    return useQuery({
        queryKey: ['products', id],
        queryFn: () => ProductService.getProductsFromRestaurant(id),
        enabled: !!id,
    })
}