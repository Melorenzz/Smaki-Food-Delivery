import {useFormContext} from "react-hook-form";
import {ChevronRightIcon} from "@heroicons/react/16/solid";
import {store} from "../../store.ts";
import ProductCard from "./ProductCard.tsx";
import {useEffect, useState} from "react";
import {useGetBasket} from "../../hooks/useGetBasket.ts";
import type {IProductCard} from "../../types/types.ts";

const YourOrder = () => {
    const { handleSubmit } = useFormContext();


    const onSubmit = () => {
        console.log("Form data:");

    };

    const onError = () => {
        console.log("Form errors:");
    };
    const [cart, setCart] = useState<IProductCard[]>([])

    const isAuthenticated = store(state => state.isAuthenticated);

    const {data: cartBd} = useGetBasket(isAuthenticated)
    const cartStorage = store(state => state.cart);

    useEffect(() => {
        if(isAuthenticated){
            setCart(cartBd)
        }else{
            setCart(cartStorage);
        }
    }, [cartBd, isAuthenticated, cartStorage]);

    return (
        <div className='flex-1'>
            <h2 className='text-[18px] font-semibold'>Ваше замовлення</h2>

            <div className='rounded-[28px] space-y-[10px] max-h-[447px] overflow-y-scroll hide-scrollbar my-[12px]'>
                {cart?.map((product: IProductCard) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className='bg-white-col p-[20px] rounded-[28px] '>
                <button
                    onClick={handleSubmit(onSubmit, onError)}
                    className='mt-4 bg-green-col text-white font-semibold w-full rounded-full p-[12px] flex items-center justify-center gap-1'
                >
                    Замовити
                    <ChevronRightIcon className='w-[23px]' />
                </button>
            </div>

        </div>
    );
};

export default YourOrder;
