import MainLayout from "../../layouts/MainLayout.tsx";
import {ChevronLeftIcon} from "@heroicons/react/16/solid";
import RestaurantPreview from "../../components/RestaurantPreview.tsx";
import {useGetRestaurants} from "../../hooks/useGetRestaurants.ts";
import {useNavigate} from "react-router";

const RestaurantsPage = () => {

    const {data: restaurants} = useGetRestaurants()
    console.log(restaurants)
    const navigate = useNavigate();
    return (
        <MainLayout>
            <div>
                <div className='flex gap-[10px] items-center'>
                    <button onClick={() => navigate(-1)} className='w-[44px] aspect-square bg-white-col rounded-[14px]'>
                        <ChevronLeftIcon className='w-full' />
                    </button>
                    <h1 className='text-[32px] font-bold my-[40px]'>Заклади</h1>
                </div>
                <div className='grid grid-cols-3 gap-[24px]'>
                    {restaurants?.restaurants?.map(restaurant => (
                        <RestaurantPreview key={restaurant.id} restaurant={restaurant} />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default RestaurantsPage;