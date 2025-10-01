import {ChevronRightIcon, StarIcon} from "@heroicons/react/16/solid";
import {TruckIcon} from "@heroicons/react/24/outline";
import type {IProductCard, IRestaurant} from "../../types/types.ts";
import {useGetProductsFromRestaurantQuery} from "../../hooks/useGetProductsFromRestaurantQuery.ts";
import ProductCardInSwiper from "./ProductCardInSwiper.tsx";
import {Link} from "react-router";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const RestaurantPreview = ({restaurant}: {restaurant: IRestaurant}) => {

    const {data} = useGetProductsFromRestaurantQuery(restaurant.id);
    const products = data?.products;



    return (
        <section className='flex flex-col bg-white-col py-[27px]  pl-[27px] rounded-[51px]'>
            <div className='flex gap-[40px]'>
                <Link to={`/restaurant/${restaurant.id}`} className='shrink-0 shadow w-fit h-[334px] grid grid-rows-3 rounded-[32px] overflow-hidden mb-[40px]'>
                    <div className='relative w-[424px] h-full row-span-2 rounded-b-[32px] overflow-hidden flex justify-center items-center'>
                        <img className='object-cover' src={restaurant.banner} alt=""/>
                        <div className='absolute text-red-col flex items-center gap-[4px] bottom-[20px] right-[20px] bg-white-col rounded-full py-[5px] px-[10px]'>
                            <StarIcon className='w-[20px]' />
                            <span className='text-[14px] font-bold'>{restaurant.rating} %</span>
                        </div>
                    </div>
                    <div className='px-[18px]'>
                        <h2 className='font-bold text-[20px] mt-[17px]'>{restaurant.name}</h2>
                        <div className='flex gap-[8px] mt-[6px] items-center'>
                            <div className='flex items-center bg-[#FFEDBA] gap-[3px] w-fit rounded-full text-[#CC6821] px-[9px] py-[5px]'>
                                <TruckIcon className='w-[24px]' />
                                <span className='font-semibold text-[14px]'>{restaurant.deliveryPrice} грн</span>
                            </div>
                            <span className='text-dark-gray font-semibold'>{restaurant.cookingTime} хв</span>
                        </div>
                    </div>
                </Link>

                {/* Swiper для продуктов */}
                <Swiper
                    className='flex h-[334px] !pb-[1px]'
                    modules={[Navigation, Pagination]}
                    spaceBetween={40} // расстояние между карточками
                    slidesPerView={"auto"} // автоширина под контент
                    navigation
                    pagination={{ clickable: true }}
                >
                    {products?.map((product: IProductCard) => (
                        <SwiperSlide className='shrink-0' key={product.id} style={{ width: "auto" }}>
                            <ProductCardInSwiper product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='ml-auto mr-[40px] items-center text-red-col flex '>
                <Link className='font-semibold' to={`/restaurant/${restaurant.id}`}>Показати все</Link>
                <ChevronRightIcon className='w-[24px]' />
            </div>
        </section>
    );
};

export default RestaurantPreview;
