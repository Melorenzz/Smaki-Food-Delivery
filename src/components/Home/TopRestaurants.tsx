import {ChevronRightIcon} from "@heroicons/react/16/solid";
import type {IProductCard, IRestaurant} from "../../types/types.ts";
import {useGetProductsFromRestaurantQuery} from "../../hooks/useGetProductsFromRestaurantQuery.ts";
import ProductCardInSwiper from "./ProductCardInSwiper.tsx";
import {Link} from "react-router";


import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination} from "swiper/modules";
import RestaurantPreview from "../RestaurantPreview.tsx";

const TopRestaurants = ({restaurant}: { restaurant: IRestaurant }) => {

    const {data} = useGetProductsFromRestaurantQuery(restaurant.id);
    const products = data?.pages[0].products;


    return (
        <section className='flex flex-col overflow-hidden bg-white-col py-[15px] md:py-[27px] pr-[15px] md:pr-0 pl-[15px] md:pl-[27px] rounded-[51px]'>
            <div className='flex flex-col md:flex-row gap-[40px]'>

                <div className='w-full md:max-w-[424px]'>
                    <RestaurantPreview restaurant={restaurant}/>

                </div>

                {/* Swiper для продуктов */}
                <Swiper
                    className='flex h-[334px] w-full !pb-[1px]'
                    modules={[Navigation, Pagination]}
                    spaceBetween={40} // расстояние между карточками
                    slidesPerView={"auto"} // автоширина под контент
                    navigation
                    pagination={{clickable: true}}
                >
                    {products?.map((product: IProductCard) => (
                        <SwiperSlide className='shrink-0' key={product.id} style={{width: "auto"}}>
                            <ProductCardInSwiper product={product}/>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
            <div className='ml-auto md:flex mr-[40px] items-center text-red-col hidden '>
                <Link className='font-semibold' to={`/restaurant/${restaurant.id}`}>Показати все</Link>
                <ChevronRightIcon className='w-[24px]'/>
            </div>
        </section>
    );
};

export default TopRestaurants;
