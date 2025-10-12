import {StarIcon} from "@heroicons/react/16/solid";
import { TruckIcon} from "@heroicons/react/24/outline";
import {Link} from "react-router";
import type {IRestaurant} from "../types/types.ts";
import {useFavoriteAction} from "../hooks/useFavoriteAction.ts";
import {useGetFavorites} from "../hooks/useGetFavorites.ts";
import FavoriteButton from "./FavoriteButton.tsx";

const RestaurantPreview = ({restaurant}: {restaurant: IRestaurant}) => {

    const { favoriteAction } = useFavoriteAction(restaurant.id, 'restaurant');
    const {data: favorites} = useGetFavorites()

    return (
        <Link
            to={`/restaurant/${restaurant?.id}`}
            className='relative shrink-0 shadow  border-2 transition border-transparent hover:border-red-col  w-full h-[334px] grid grid-rows-3 rounded-[32px] overflow-hidden mb-[40px]'>
            <FavoriteButton isInFavorite={favorites?.restaurants?.some((i: IRestaurant) => i.id === restaurant.id)} favoriteAction={favoriteAction} />

            <div className='relative h-full row-span-2 rounded-b-[32px] overflow-hidden flex justify-center items-center'>
                <img className='object-cover w-full h-full' src={restaurant?.banner} alt=""/>
                <div className='absolute text-red-col flex items-center gap-[4px] bottom-[20px] right-[20px] bg-white-col rounded-full py-[5px] px-[10px]'>
                    <StarIcon className='w-[20px]' />
                    <span className='text-[14px] font-bold'>{restaurant?.rating} %</span>
                </div>
            </div>
            <div className='px-[18px]'>
                <h2 className='font-bold text-[20px] mt-[17px]'>{restaurant?.name}</h2>
                <div className='flex gap-[8px] mt-[6px] items-center'>
                    <div className='flex items-center bg-[#FFEDBA] gap-[3px] w-fit rounded-full text-[#CC6821] px-[9px] py-[5px]'>
                        <TruckIcon className='w-[24px]' />
                        <span className='font-semibold text-[14px]'>{restaurant?.deliveryPrice} грн</span>
                    </div>
                    <span className='text-dark-gray font-semibold'>{restaurant?.cookingTime} хв</span>
                </div>
            </div>
        </Link>
    );
};

export default RestaurantPreview;