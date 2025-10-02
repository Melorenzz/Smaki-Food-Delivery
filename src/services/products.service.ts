import {axiosInstance} from "./api/innterceptor.ts";

export const ProductService = {
    getProductsFromRestaurant: async (id: string) => {
        const res = await axiosInstance.get(`/products/get-product-restaurants/${id}`);
        return res.data.data;
    },
    getProductById: async (id: string) => {
        const res = await axiosInstance.get(`/products/get-product/${id}`)
        return res.data.data;
    }
}