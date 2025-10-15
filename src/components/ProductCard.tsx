import Img from "./Img.tsx";
import type {IProductCard} from "../types/types.ts";
import {CheckCircleIcon, PlusCircleIcon} from "@heroicons/react/16/solid";
import {Link} from "react-router";
import {store} from "../store.ts";
import { useEffect, useState} from "react";
import {useFavoriteAction} from "../hooks/useFavoriteAction.ts";
import FavoriteButton from "./FavoriteButton.tsx";
import {useGetFavorites} from "../hooks/useGetFavorites.ts";
import {useBasketAction} from "../hooks/useBasketAction.ts";
import {useGetBasket} from "../hooks/useGetBasket.ts";
import toast from "react-hot-toast";


const ProductCard = ({product}: {product: IProductCard}) => {

    const cart = store(state => state.cart);
    const setCart = store(state => state.setCart);
    const [isInCart, setIsInCart] = useState(false);
    const { favoriteAction } = useFavoriteAction(product.id, 'product');
    const isAuthenticated = store(state => state.isAuthenticated);
    const {data: cartBd} = useGetBasket(isAuthenticated)
    useEffect(() => {
        if(isAuthenticated){
            const isExistInCart = cartBd?.some(i => i.id === product.id)
            setIsInCart(isExistInCart)
        }else{
            const isExistInCart = cart.some(i => i.id === product.id)
            setIsInCart(isExistInCart)
        }

    }, [cart, isAuthenticated, cartBd])

    const {mutate} = useBasketAction()

    const addToCart = (data) => {
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
                        console.log("success");
                        toast.success('Кошик оновлено')
                    },
                    onError: (error) => {
                        console.log("error", error);
                        toast.error('Помилка')
                    },
                }
            );
        } else {
            toast.success('Кошик оновлено')
            setCart(data);
        }
    };
    const {data: favorites} = useGetFavorites()
    return (
        <div className='bg-white-col h-full relative flex flex-col rounded-[36px] shadow p-[20px]'>
            <FavoriteButton isInFavorite={favorites?.products?.some((i: IProductCard) => i.id === product.id)} favoriteAction={favoriteAction} />

            {/*<button onClick={favoriteAction} className='absolute p-[7px] scale-100 hover:scale-110 transition rounded-xl backdrop-blur-xl top-5 bg-white-col/50 shadow right-5 z-1'>*/}
            {/*    <HeartIcon className='w-[24px]' />*/}
            {/*</button>*/}
            <Link to={`/product/${product.id}`} className='aspect-square w-full '>
                <Img src={product.image} alt={product?.name} className='w-full h-full object-contain'  />
            </Link>
            <div className=' my-[12px] flex flex-col gap-[8px]'>
                <span className='text-[14px] text-dark-gray'>{product.weight} г</span>
                <h3 className='font-bold text-[20px] line-clamp-2'>{product.name}</h3>
                <p className='mt-[8px] line-clamp-3 text-[14px] text-dark-gray leading-5'>{product.description}</p>
            </div>
            <div className='mt-auto flex justify-between items-end'>
                <span className='font-semibold text-[22px]'>{product.price} <span className='text-[14px] font-medium'>грн</span></span>
                <button disabled={isInCart} onClick={() => addToCart({image: product?.image, name: product?.name, price: product?.price, description: product?.description, id: product?.id, weight: product?.weight, quantityInBasket: 1, restaurantId: product?.restaurantId})} className='aspect-square w-[44px]'>
                    {isInCart ? (
                        <CheckCircleIcon className='text-green-col' />
                        ) : (
                        <PlusCircleIcon />
                    )}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;