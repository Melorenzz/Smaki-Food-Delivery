import {useQuery} from "@tanstack/react-query";
import {ProductService} from "../services/products.service.ts";

export const useGetProductById = (id: string | undefined) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => {
            if(!id) throw new Error("Id not found!");
            return ProductService.getProductById(id)
        },
        enabled: !!id
    })
}