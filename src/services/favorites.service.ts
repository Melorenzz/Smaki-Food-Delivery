import {axiosInstance} from "./api/innterceptor.ts";

export const FavoritesService = {
    getAllFavorites: async () => {
        const res = await axiosInstance.get('/favorites/get-all-favorites')
        return res.data.data;
    },
    addFavorite: (data: {restaurantId?: string, productId?: string, type: 'restaurant' | 'product'}) => {
        return axiosInstance.post('/favorites/actions-favorite', data)
    }
}