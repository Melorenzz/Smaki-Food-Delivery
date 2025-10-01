import {useGetTopRestaurantsQuery} from "../../hooks/useGetRestaurantsQuery.ts";
import RestaurantPreview from "./RestaurantPreview.tsx";
import type {IRestaurant} from "../../types/types.ts";

const PopularRestaurants = () => {
    const {data, isLoading} = useGetTopRestaurantsQuery()
    const slicedData = data?.slice(0, 3)
    console.log(slicedData)
    return (
        <div className='flex flex-col gap-[40px] mt-[60px]'>
            {slicedData?.map((restaurant: IRestaurant) => (
                <RestaurantPreview key={restaurant.id} restaurant={restaurant} />
            ))}

        </div>
    );
};

export default PopularRestaurants;