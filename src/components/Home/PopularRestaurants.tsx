import {useGetTopRestaurantsQuery} from "../../hooks/useGetRestaurantsQuery.ts";
import type {IRestaurant} from "../../types/types.ts";
import TopRestaurants from "./TopRestaurants.tsx";

const PopularRestaurants = () => {
    const {data, isLoading} = useGetTopRestaurantsQuery()
    const slicedData = data?.slice(0, 3)

    return (
        <div className='flex flex-col gap-[40px] mt-[60px]'>
            <h2 className="text-[32px] font-extrabold">Топ 3 ресторану</h2>

            {slicedData?.map((restaurant: IRestaurant) => (
                <TopRestaurants key={restaurant.id} restaurant={restaurant} />
            ))}


        </div>
    );
};

export default PopularRestaurants;