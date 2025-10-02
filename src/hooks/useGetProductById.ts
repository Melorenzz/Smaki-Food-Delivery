import {useQuery} from "@tanstack/react-query";
import {ProductService} from "../services/products.service.ts";

export const useGetProductById = (id: string) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => ProductService.getProductById(id)
    })
}