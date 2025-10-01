import {axiosInstance} from "./api/innterceptor.ts";

export const RestaurantsService = {
    getTopRestaurants: async () => {
        const res = await axiosInstance.get('restaurants/get-top-restaurants')
        return res.data.data;
    },
    getRestaurant: async (id: string) => {
        const res = await axiosInstance.get(`restaurants/get-restaurant/${id}`)
        return res.data.data;
    },
}
