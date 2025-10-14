import {axiosInstance} from "./api/innterceptor.ts";

export const BasketService = {
    getBasket: async () => {
        const res = await axiosInstance.get('/basket/product-basket');
        console.log('here', res.data.data);
        return res.data.data;
    },
    basketAction: async (data) => {
        const res = await axiosInstance.post('/basket/actions-basket', data);
        return res.data.data;
    }
}