import {ChevronRightIcon} from "@heroicons/react/16/solid";
import type {IProductCard, IRestaurant} from "../../types/types.ts";
import {useGetProductsFromRestaurantQuery} from "../../hooks/useGetProductsFromRestaurantQuery.ts";
import ProductCardInSwiper from "./ProductCardInSwiper.tsx";
import {Link} from "react-router";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import RestaurantPreview from "../RestaurantPreview.tsx";

const TopRestaurants = ({restaurant}: {restaurant: IRestaurant}) => {

    const {data} = useGetProductsFromRestaurantQuery(restaurant.id);
    const products = data?.products;



    return (
        <section className='flex flex-col bg-white-col py-[27px]  pl-[27px] rounded-[51px]'>
            <div className='flex gap-[40px]'>
                <RestaurantPreview restaurant={restaurant} />

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

export default TopRestaurants;
