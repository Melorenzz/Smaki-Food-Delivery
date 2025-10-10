import {useGetTopRestaurantsQuery} from "../../hooks/useGetRestaurantsQuery.ts";
import type {IRestaurant} from "../../types/types.ts";
import TopRestaurants from "./TopRestaurants.tsx";
import H2 from "./H2.tsx";

const PopularRestaurants = () => {
    const {data} = useGetTopRestaurantsQuery()
    const slicedData = data?.slice(0, 3)

    return (
        <div className='flex flex-col gap-[40px] mt-[60px]'>
            <H2>Топ 3 ресторану</H2>

            {slicedData?.map((restaurant: IRestaurant) => (
                <TopRestaurants key={restaurant.id} restaurant={restaurant} />
            ))}


        </div>
    );
};

export default PopularRestaurants;