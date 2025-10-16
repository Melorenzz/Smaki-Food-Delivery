import MainLayout from "../layouts/MainLayout.tsx";
import {CheckCircleIcon} from "@heroicons/react/24/outline";
import {MapPinIcon} from "@heroicons/react/16/solid";
import {Link} from "react-router";

const OrderDone = () => {
    return (
        <MainLayout>
            <div className="mx-auto max-w-[540px] bg-white-col w-full mt-[calc(88px+35px)] rounded-[28px] p-[30px]">
                <div className="flex flex-col items-center">
                    <CheckCircleIcon className='w-[40px] aspect-square text-green-col' />
                    <h1 className='font-semibold text-[24px] mt-[8px]'>Дякуємо за замовлення!</h1>

                </div>
                <div className="mt-[30px] pb-[20px] border-b border-border-col">
                    <h2 className='font-bold text-[18px]'>Ваше замовлення</h2>
                    <ul className="mt-[10px] space-y-[16px]">
                        <li className='flex justify-between text-[14px]'>
                            <div className='flex gap-[20px]'>
                                <span className='font-semibold'>2x</span>
                                <span className='underline'>Філадельфія з авокадо (260г)</span>
                            </div>
                            <span><span className='font-semibold'>174</span> грн</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-[30px] pb-[20px] border-b border-border-col">
                    <h2 className='font-bold text-[18px]'>Доставка</h2>
                    <div className='mt-[10px] flex gap-[12px]'>
                        <div className='flex flex-col items-center w-fit space-y-[5px]'>
                            <div className='w-[18px] aspect-square border-3 border-red-col rounded-full'></div>
                            <div className='w-[10px] aspect-square bg-dark-gray rounded-full'></div>
                            <div className='w-[10px] aspect-square bg-dark-gray rounded-full'></div>
                            <div className='w-[10px] aspect-square bg-dark-gray rounded-full'></div>
                            <MapPinIcon className='w-[24px] text-red-col' />
                        </div>
                        <div className='flex flex-col justify-between '>
                            <span className='text-[14px]'>Smaki-Maki</span>
                            <span className='text-[14px] leading-4.5 line-clamp-2'>
                                Львів, проспект Червоної Калини, будинок 45, кв. 18, під'їзд 2, поверх 6
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-[30px]">
                    <h2 className='font-bold text-[18px]'>Загальна інформація</h2>
                    <div className='mt-[10px] flex justify-between text-[14px]'>
                        <span className='font-semibold '>Загальна вартість:</span>
                        <span><span className='font-bold text-[16px]'>391</span> грн</span>
                    </div>
                </div>

                <div className='flex flex-col gap-[10px] mt-[30px]'>
                    <button className='w-full rounded-full bg-green-col p-[12px] text-white font-semibold'>Відстежити замовлення</button>
                    <Link to='/' className='w-full rounded-full p-[12px] text-center font-semibold border-2 border-border-col'>Продовжити покупки</Link>
                </div>
            </div>
        </MainLayout>
    );
};

export default OrderDone;