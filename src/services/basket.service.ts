import {axiosInstance} from "./api/innterceptor.ts";
import type {IChangeQuantity} from "../types/types.ts";

export const BasketService = {
    getBasket: async () => {
        const res = await axiosInstance.get('/basket/product-basket');
        console.log('here', res.data.data);
        return res.data.data;
    },
    basketAction: async (data: IChangeQuantity) => {
        const res = await axiosInstance.post('/basket/actions-basket', data);
        return res.data.data;
    }
}