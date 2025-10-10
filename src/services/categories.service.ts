import {axiosInstance} from "./api/innterceptor.ts";

export const CategoriesService = {
    getTopCategories: async () => {
        const res = await axiosInstance.get('/categories/get-top');
        return res.data.data;
    }
}