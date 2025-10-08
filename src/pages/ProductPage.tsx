import {useGetProductById} from "../hooks/useGetProductById.ts";
import {useLocation} from "react-router";
import Img from "../components/Img.tsx";
import {PlusCircleIcon} from "@heroicons/react/24/outline";
import {store} from "../store.ts";
import {useEffect, useState} from "react";
import BackButton from "../components/BackButton.tsx";

const ProductPage = () => {
    const pathname = useLocation().pathname;
    const id = pathname.split('/').pop();
    const {data: product} = useGetProductById(id)
    const [isInCart, setIsInCart] = useState(false);
    const setCart = store(state => state.setCart)
    const cart = store(state => state.cart)

    useEffect(() => {
        const isExistInCart = cart.some(i => i.id === id)
        setIsInCart(isExistInCart)
    }, [cart, setIsInCart])
    console.log(product)
    return (
        <div className='mx-auto max-w-[560px] w-full mt-[120px]'>
            <div className='aspect-square w-full rounded-[32px] overflow-hidden bg-white-col relative'>
                <BackButton isAbsolutePosition={true} />
                <Img className='w-full object-contain' src={product?.image} alt=""/>
            </div>

            <div className='mt-[20px] bg-white-col rounded-[20px] p-[20px]'>
                <span className='text-dark-gray text-[14px]'>{product?.weight} г</span>
                <div className='flex items-center justify-between'>
                    <h2 className='font-bold line-clamp-2 text-[20px]'>{product?.name}</h2>
                    <span className='text-[14px]'><span className='text-[22px] font-bold'>{product?.price}</span> грн</span>
                </div>
                <p className='text-dark-gray text-[14px] line-clamp-2 leading-4 mt-[8px]'>{product?.description}</p>
                <div className='flex items-center justify-between gap-[11px] mt-[16px]'>
                    <button disabled={isInCart} onClick={() => setCart({image: product?.image, name: product?.name, price: product?.price, description: product?.description, id: product?.id, weight: product?.weight, quantity: 1})} className={`w-full py-[12px]  rounded-full ${isInCart ? 'bg-none border border-col cursor-not-allowed' : 'bg-green-col cursor-pointer text-white-col'}`}>
                        {isInCart ? 'У кошику' : 'У кошик'}
                    </button>
                    <PlusCircleIcon className='w-[44px] aspect-square text-green-col' />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;