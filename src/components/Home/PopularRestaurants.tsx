import {useGetTopRestaurantsQuery} from "../../hooks/useGetRestaurantsQuery.ts";
import type {IRestaurant} from "../../types/types.ts";
import TopRestaurants from "./TopRestaurants.tsx";

const PopularRestaurants = () => {
    const {data} = useGetTopRestaurantsQuery()
    const slicedData = data?.slice(0, 3)
    console.log(slicedData)
    return (
        <div className='flex flex-col gap-[40px] mt-[60px]'>
            {slicedData?.map((restaurant: IRestaurant) => (
                <TopRestaurants key={restaurant.id} restaurant={restaurant} />
            ))}

        </div>
    );
};

export default PopularRestaurants;