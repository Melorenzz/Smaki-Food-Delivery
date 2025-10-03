import { useInfiniteQuery } from "@tanstack/react-query";
import { ProductService } from "../services/products.service";

export const useGetProductsFromRestaurantQuery = (id: string) => {
    return useInfiniteQuery({
        queryKey: ["products", id],
        queryFn: ({ pageParam = 1 }) =>
            ProductService.getProductsFromRestaurant(id, pageParam, 6),
        getNextPageParam: (lastPage) => {
            const { meta } = lastPage;
            return meta.currentPage < meta.totalPages ? meta.currentPage + 1 : undefined;
        },
        initialPageParam: 1,
        enabled: !!id,
        refetchOnWindowFocus: false,
    });
};
