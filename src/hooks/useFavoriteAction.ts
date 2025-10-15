import {useMutation, useQueryClient} from "@tanstack/react-query";
import {FavoritesService} from "../services/favorites.service.ts";
import type {FormEvent} from "react";
import toast from "react-hot-toast";

export const useFavoriteAction = (id: string, type: 'product' | 'restaurant' ) => {
    const queryClient = useQueryClient();
    const { mutate, isPending, isError, error } = useMutation({
        mutationKey: ['addFavorite', id],
        mutationFn: (data: {restaurantId?: string, productId?: string, type: 'restaurant' | 'product'}) => FavoritesService.addFavorite(data),
        onSuccess: () => {
            console.log("Favorite action successfully");
            toast.success('Улюблене оновлено!');


            queryClient.invalidateQueries({ queryKey: ['getFavorites'] });
        },
        onError: (err) => {
            console.log("Error favorite action");
            console.log(err)
            toast.success('Помилка.');
        }
    })
    const favoriteAction = (e?: FormEvent) => {
        e?.stopPropagation();
        e?.preventDefault();
        console.log(id);
        if(type === 'product') {
            mutate({productId: id, type: 'product'})
        }else if(type === 'restaurant') {
            mutate({restaurantId: id, type: 'restaurant'})
        }
    }

    return { favoriteAction, isPending, isError, error };
}