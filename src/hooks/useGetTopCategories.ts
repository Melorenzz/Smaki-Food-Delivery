import {useQuery} from "@tanstack/react-query";
import {CategoriesService} from "../services/categories.service.ts";

export const useGetTopCategories = () => {
    return useQuery({
        queryKey: ['topCategories'],
        queryFn: () => CategoriesService.getTopCategories()
    })
}