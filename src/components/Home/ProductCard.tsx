import Img from "../Img.tsx";
import type {IProductCard} from "../../types/types.ts";
import {CheckCircleIcon, PlusCircleIcon} from "@heroicons/react/16/solid";
import {Link} from "react-router";
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
        <div className='bg-white-col flex flex-col rounded-[36px] shadow p-[20px]'>
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
                <button disabled={isInCart} onClick={() => setCart({image: product?.image, name: product?.name, price: product?.price, description: product?.description, id: product?.id, weight: product?.weight})} className='aspect-square w-[44px]'>
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