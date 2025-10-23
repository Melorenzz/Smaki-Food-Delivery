import {useGetProductById} from "../hooks/useGetProductById.ts";
import {useLocation} from "react-router";
import Img from "../components/Img.tsx";
import {PlusCircleIcon} from "@heroicons/react/24/outline";
import {store} from "../store.ts";
import {useEffect, useState} from "react";
import BackButton from "../components/BackButton.tsx";
import {useBasketAction} from "../hooks/useBasketAction.ts";
import {useGetBasket} from "../hooks/useGetBasket.ts";
import MainLayout from "../layouts/MainLayout.tsx";
import ProductsFromSameRestaurant from "../components/product/ProductsFromSameRestaurant.tsx";
import toast from "react-hot-toast";
import type { IProductCard} from "../types/types.ts";

const ProductPage = () => {
    const pathname = useLocation().pathname;
    const id = pathname.split('/').pop();
    const {data: product} = useGetProductById(id)
    const [isInCart, setIsInCart] = useState(false);
    const setCart = store(state => state.setCart)
    const cart = store(state => state.cart)
    const isAuthenticated = store(state => state.isAuthenticated)
    const {data: cartBd} = useGetBasket(isAuthenticated)

    useEffect(() => {
        console.log('pro', product?.restaurantId)
    }, [product]);

    useEffect(() => {
        if(isAuthenticated){
            const isExistInCart = cartBd?.some((i: IProductCard) => i.id === id)
            setIsInCart(isExistInCart)
        }else{
            const isExistInCart = cart.some(i => i.id === id)
            setIsInCart(isExistInCart)
        }

    }, [cart, setIsInCart, isAuthenticated, cartBd])
    console.log(product)


    const {mutate} = useBasketAction()

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
                        console.log("error", error);
                    },
                }
            );
        } else {
            toast.success('Кошик оновлено')
            setCart(data);
        }
    };



    return (
        <MainLayout>
            <div className="mx-auto max-w-[1200px] w-full mt-[120px] flex flex-col gap-[40px]">

                {/* Основная секция с рестораном / продуктом */}
                <div className="flex flex-col md:flex-row gap-[30px] bg-white-col rounded-[32px] p-[20px]">

                    {/* Левый блок — изображение */}
                    <div className="md:w-1/2 w-full aspect-square rounded-[24px] overflow-hidden bg-gray-100 relative">
                        <BackButton isAbsolutePosition={true} />
                        <Img className="w-full h-full object-cover" src={product?.image} alt="" />
                    </div>

                    {/* Правый блок — информация о продукте */}
                    <div className="md:w-1/2 w-full flex flex-col justify-between gap-[20px]">

                        {/* Основная информация */}
                        <div>
                            <span className="text-dark-gray text-[14px]">{product?.weight} г</span>
                            <div className="flex items-center justify-between mt-[8px]">
                                <h2 className="font-bold line-clamp-2 text-[20px]">{product?.name}</h2>
                                <span className="text-[14px]"><span className="text-[22px] font-bold">{product?.price}</span> грн</span>
                            </div>
                            <p className="text-dark-gray text-[14px] leading-5 mt-[12px]">{product?.description}</p>
                        </div>

                        {/* Большой блок преимуществ ресторана */}
                        <div className="bg-gray-50 rounded-[24px] p-[20px] flex flex-col gap-[16px]">
                            <div className="flex items-center gap-[12px] text-[16px] font-semibold">
                                🚀 <span>Доставка до 30 хвилин</span>
                            </div>
                            <div className="flex items-center gap-[12px] text-[16px] font-semibold">
                                ⭐ <span>Рейтинг ресторану 4.8 (120 відгуків)</span>
                            </div>
                            <div className="flex items-center gap-[12px] text-[16px] font-semibold">
                                🥗 <span>Свіжі інгредієнти та авторські рецепти</span>
                            </div>
                            <div className="flex items-center gap-[12px] text-[16px] font-semibold">
                                💰 <span>Безкоштовна доставка від 300 грн</span>
                            </div>
                            <div className="flex items-center gap-[12px] text-[16px] font-semibold">
                                🔥 <span>Щотижневі акції та спеціальні пропозиції</span>
                            </div>
                            <div className="flex items-center gap-[12px] text-[16px] font-semibold">
                                ⏱ <span>Замовлення готується за 15-20 хв</span>
                            </div>
                            <div className="flex items-center gap-[12px] text-[16px] font-semibold">
                                🍴 <span>Кухня: авторська, італійська, європейська</span>
                            </div>
                        </div>

                        {/* Добавление в корзину */}
                        <div className="flex items-center justify-between gap-[12px] mt-[16px]">
                            <button
                                disabled={isInCart}
                                onClick={() => addToCart({
                                    image: product?.image,
                                    name: product?.name,
                                    price: product?.price,
                                    description: product?.description,
                                    id: product?.id,
                                    weight: product?.weight,
                                    quantityInBasket: 1,
                                    restaurantId: product?.restaurantId
                                })}
                                className={`w-full py-[12px] rounded-full ${isInCart ? 'bg-none border border-col cursor-not-allowed' : 'bg-green-col cursor-pointer text-white-col'}`}
                            >
                                {isInCart ? 'У кошику' : 'У кошик'}
                            </button>
                            <PlusCircleIcon className="w-[44px] aspect-square text-green-col" />
                        </div>
                    </div>
                </div>

                <ProductsFromSameRestaurant restaurantId={product?.restaurantId} />

            </div>
        </MainLayout>


    );

};

export default ProductPage;