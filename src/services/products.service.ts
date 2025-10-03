import {axiosInstance} from "./api/innterceptor.ts";

export const ProductService = {
    getProductsFromRestaurant: async (id: string, page = 1, limit = 6) => {
        const res = await axiosInstance.get(`/products/get-product-restaurants/${id}?page=${page}&limit=${limit}`);
        return res.data.data;
    },
    getProductById: async (id: string) => {
        const res = await axiosInstance.get(`/products/get-product/${id}`)
        return res.data.data;
    }
}