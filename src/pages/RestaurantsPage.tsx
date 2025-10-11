import MainLayout from "../layouts/MainLayout.tsx";
import {ChevronLeftIcon} from "@heroicons/react/16/solid";
import RestaurantPreview from "../components/RestaurantPreview.tsx";
import {useGetRestaurants} from "../hooks/useGetRestaurants.ts";
import {useNavigate} from "react-router";
import H2 from "../components/Home/H2.tsx";

const RestaurantsPage = () => {

    const {data: restaurants} = useGetRestaurants()
    const navigate = useNavigate();
    return (
        <MainLayout>
            <div className="mt-[88px]">
                <div className='flex gap-[10px] items-center'>
                    <button onClick={() => navigate(-1)} className='w-[44px] aspect-square bg-white-col rounded-[14px]'>
                        <ChevronLeftIcon className='w-full' />
                    </button>
                    <h1 className='text-[32px] font-bold my-[40px]'>Заклади</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px]'>
                    {restaurants?.restaurants?.map(restaurant => (
                        <RestaurantPreview key={restaurant.id} restaurant={restaurant} />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default RestaurantsPage;