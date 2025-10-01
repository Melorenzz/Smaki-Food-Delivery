import MainLayout from "../../layouts/MainLayout.tsx";
import {ClockIcon, StarIcon, TruckIcon} from "@heroicons/react/16/solid";

const AboutRestaurant = ({restaurant}) => {
    return (
        <div className='w-screen rounded-[24px] bg-white-col py-[40px]'>
            <MainLayout>
                <div className="flex justify-between items-center">
                    <div className='flex gap-[20px] items-center'>
                        <div className='w-[80px] shadow aspect-square rounded-[16px] bg-white-col p-1'>
                            <img className='rounded-[16px]' src={restaurant?.logo} alt=""/>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-[22px]'>{restaurant?.name}</h1>
                            <p className='text-dark-gray text-[14px] flex items-center gap-[5px] mt-[5px]'>
                                <ClockIcon className='w-[18px]' />
                                {restaurant?.workingHours}
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-[70px]'>
                        <div className='flex flex-col justify-center items-center gap-[4px]'>
                            <div className='rounded-full bg-yellow-col p-[7px] w-[38px] aspect-square'>
                                <StarIcon className='w-full text-orange-col' />
                            </div>
                            <span className='text-[14px]'>{restaurant?.rating}%</span>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-[4px]'>
                            <div className='rounded-full bg-yellow-col p-[7px] w-[38px] aspect-square'>
                                <TruckIcon className='w-full text-orange-col' />
                            </div>
                            <span className='text-[14px]'>{restaurant?.deliveryPrice} грн</span>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-[4px]'>
                            <div className='rounded-full bg-yellow-col p-[7px] w-[38px] aspect-square'>
                                <ClockIcon className='w-full text-orange-col' />
                            </div>
                            <span className='text-[14px]'>{restaurant?.cookingTime} хв</span>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    );
};

export default AboutRestaurant;