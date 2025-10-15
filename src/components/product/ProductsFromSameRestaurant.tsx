import { useRef } from "react";
import H2 from "../Home/H2.tsx";
import ProductCard from "../ProductCard.tsx";
import { useGetProductsFromRestaurantQuery } from "../../hooks/useGetProductsFromRestaurantQuery.ts";
import type { IProductCard } from "../../types/types.ts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const ProductsFromSameRestaurant = ({ restaurantId }: { restaurantId: string }) => {
    const { data: products } = useGetProductsFromRestaurantQuery(restaurantId);

    // refs для кнопок
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);

    return (
        <div className="flex flex-col gap-5">
            <H2>Товари з цього ресторану</H2>
            <div className="w-full relative">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={15}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    grabCursor={true}
                    className="py-4 h-[550px] sm:h-[630px]"
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        if (typeof swiper.params.navigation !== "boolean") {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }
                    }}
                >
                    {products?.pages?.[0]?.products.map((product: IProductCard) => (
                        <SwiperSlide key={product.id} className="w-auto h-full">
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Кнопки навигации снаружи Swiper */}
                <div
                    ref={prevRef}
                    className="swiper-button-prev !flex !items-center !justify-center !rounded-full !bg-white-col p-[12px] !text-black-col !shadow border-2 border-border-col hover:!bg-gray-100 active:!scale-95 transition absolute left-2 top-1/2 -translate-y-1/2 z-10"
                />
                <div
                    ref={nextRef}
                    className="swiper-button-next !flex !items-center !justify-center !rounded-full !bg-white-col p-[12px] !text-black-col !shadow border-2 border-border-col hover:!bg-gray-100 active:!scale-95 transition absolute right-2 top-1/2 -translate-y-1/2 z-10"
                />
            </div>
        </div>
    );
};

export default ProductsFromSameRestaurant;
