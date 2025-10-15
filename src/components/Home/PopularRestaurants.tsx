import {useGetTopRestaurantsQuery} from "../../hooks/useGetRestaurantsQuery.ts";
import type {IRestaurant} from "../../types/types.ts";
import TopRestaurants from "./TopRestaurants.tsx";
import H2 from "./H2.tsx";

const PopularRestaurants = () => {
    const {data, isLoading} = useGetTopRestaurantsQuery()
    const slicedData = data?.slice(0, 3)

    return (
        <div className='flex flex-col gap-[40px] mt-[60px]'>
            <H2>Топ 3 ресторану</H2>

            {isLoading ? (
                Array.from({ length: 3 }).map((_, i) => (
                        <div
                            key={i}
                            className='h-[452px] p-[27px] gap-[25px] rounded-[24px] bg-white-col flex'
                        >
                            <div className='bg-gray-200 max-w-[424px] animate-pulse w-full rounded-[24px]'></div>

                            <div className='flex justify-between w-full gap-[20px]'>
                                {Array.from({ length: 3 }).map((_, j) => (
                                    <div
                                        key={j}
                                        className='flex-1 rounded-[24px] bg-gray-200 animate-pulse'
                                    ></div>
                                ))}
                            </div>
                        </div>
                    ))

            ) : (
                slicedData?.map((restaurant: IRestaurant) => (
                    <TopRestaurants key={restaurant.id} restaurant={restaurant} />
                ))
            )}


        </div>
    );
};

export default PopularRestaurants;