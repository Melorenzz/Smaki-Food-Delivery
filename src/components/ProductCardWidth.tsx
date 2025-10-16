import type {IProductCard} from "../types/types.ts";
import Img from "./Img.tsx";
import {PlusCircleIcon, CheckCircleIcon} from "@heroicons/react/24/outline";
import {store} from "../store.ts";
import { useEffect, useState} from "react";
import {useFavoriteAction} from "../hooks/useFavoriteAction.ts";
import {useGetFavorites} from "../hooks/useGetFavorites.ts";
import FavoriteButton from "./FavoriteButton.tsx";
import {useBasketAction} from "../hooks/useBasketAction.ts";
import {useGetBasket} from "../hooks/useGetBasket.ts";
import toast from "react-hot-toast";
import {Link} from "react-router";

const ProductCardWidth = ({product}: {product: IProductCard}) => {

    const cart = store(state => state.cart);
    const setCart = store(state => state.setCart);
    const [isInCart, setIsInCart] = useState(false);
    const isAuthenticated = store(state => state.isAuthenticated);
    const {data: cartBd} = useGetBasket(isAuthenticated)
    useEffect(() => {
        if(isAuthenticated){
            const isExistInCart = cartBd?.some((i: IProductCard) => i.id === product.id)
            setIsInCart(isExistInCart)
        }else{
            const isExistInCart = cart.some(i => i.id === product.id)
            setIsInCart(isExistInCart)
        }

    }, [cart, isAuthenticated, cartBd])

    useEffect(() => {
        console.log(product)
    }, [product]);

    const {mutate} = useBasketAction();

    const addToCart = (data: IProductCard) => {
        if (isAuthenticated) {
            mutate(
                {
                    productId: data.id,
                    quantity: data.quantityInBasket,
                    restaurantId: data.restaurantId,
                    sessionId: localStorage.getItem("sessionId") || undefined,
                },
                {
                    onSuccess: () => {
                        toast.success('Кошик оновлено')
                        console.log("success");
                    },
                    onError: (error) => {
                        toast.error('Помилка')
                        console.log("error", error);
                    },
                }
            );
        } else {
            toast.success('Кошик оновлено')
            setCart(data);
        }
    };

    const { favoriteAction } = useFavoriteAction(product.id, 'product');

    const {data: favorites} = useGetFavorites()

    return (
        <div className='bg-white-col relative p-[20px] h-full flex border-2 transition border-transparent hover:border-red-col items-center gap-[20px] rounded-[36px]'>

            <FavoriteButton isInFavorite={favorites?.products?.some((i: IProductCard) => i.id === product.id)} favoriteAction={favoriteAction} />


            <Img className='max-w-[150px] lg:max-w-[295px] aspect-square object-contain' src={product.image} />
            <div className='h-full w-full flex flex-col'>
                <div className='flex flex-col gap-[8px]'>
                    <span className='text-dark-gray text-[14px]'>{product.weight} г</span>
                    <Link to={`/product/${product.id}`} className='line-clamp-2 border-b border-transparent hover:border-black w-fit transition font-bold text-[16px] sm:text-[20px] leading-5 sm:leading-6'>{product.name}</Link>
                    <p className='line-clamp-3 text-dark-gray leading-4 sm:leading-5 text-[14px]'>{product.description}</p>
                </div>
                <div className='mt-auto flex items-end justify-between'>
                    <span className='text-[14px]'> <span className='font-bold text-[22px]'>{product.price}</span> грн</span>
                    <button disabled={isInCart} onClick={() => addToCart({image: product?.image, name: product?.name, price: product?.price, description: product?.description, id: product?.id, weight: product?.weight, quantityInBasket: 1, restaurantId: product?.restaurantId})} className='w-[44px] text-[#049F83] aspect-square'>
                        {isInCart ? (
                                <CheckCircleIcon />
                        ) : (
                            <PlusCircleIcon className='w-full text-[#049F83]' />

                        )}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProductCardWidth;