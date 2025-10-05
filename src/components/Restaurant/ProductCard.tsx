import type {IProductCard} from "../../types/types.ts";
import Img from "../Img.tsx";
import {PlusCircleIcon, CheckCircleIcon} from "@heroicons/react/24/outline";
import {store} from "../../store.ts";
import {useEffect, useState} from "react";

const ProductCard = ({product}: {product: IProductCard}) => {

    const cart = store(state => state.cart);
    const setCart = store(state => state.setCart);
    const [isInCart, setIsInCart] = useState(false);
    useEffect(() => {
        const isExistInCart = cart.some(i => i.id === product.id)
        setIsInCart(isExistInCart)
    }, [cart])


    return (
        <div className='bg-white-col p-[20px] flex border-2 transition border-transparent hover:border-red-col items-center gap-[20px] rounded-[36px]'>
            <Img className='max-w-[150px] lg:max-w-[295px] aspect-square object-contain' src={product.image} />
            <div className='h-full w-full flex flex-col'>
                <div className='flex flex-col gap-[8px]'>
                    <span className='text-dark-gray text-[14px]'>{product.weight} г</span>
                    <h3 className='line-clamp-2 font-bold text-[16px] sm:text-[20px] leading-5 sm:leading-6'>{product.name}</h3>
                    <p className='line-clamp-3 text-dark-gray leading-4 sm:leading-5 text-[14px]'>{product.description}</p>
                </div>
                <div className='mt-auto flex items-end justify-between'>
                    <span className='text-[14px]'> <span className='font-bold text-[22px]'>{product.price}</span> грн</span>
                    <button disabled={isInCart} onClick={() => setCart({image: product?.image, name: product?.name, price: product?.price, description: product?.description, id: product?.id, weight: product?.weight})} className='w-[44px] text-[#049F83] aspect-square'>
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

export default ProductCard;