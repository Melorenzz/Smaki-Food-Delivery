import {MagnifyingGlassIcon} from "@heroicons/react/16/solid";
import {useRef} from "react";

const Banner = () => {
    const focusOnSearch = useRef<HTMLInputElement | null>(null);
    return (
        <div className='flex flex-wrap justify-between gap-5 mt-30'>
            <img className='max-w-[680px] h-[400px] object-cover w-full rounded-2xl' src="/images/main_image.webp" alt="main image"/>
            <div className='max-w-[595px]'>
                <h1 className='text-[54px] font-semibold'>
                    Сервіс доставки їжі EatsEasy.
                </h1>
                <p className='text-[18px] text-dark-gray mt-5'>
                    Обирайте найкращі ресторани у вашому місті та насолоджуйтеся вишуканими стравами, не виходячи з дому. Високоякісне обслуговування та швидка доставка зроблять кожне замовлення справжнім святом для вашого смаку. Замовляйте легко, зручно та швидко!
                </p>
                <div onClick={() => focusOnSearch?.current?.focus()} className='flex justify-center items-center  mt-[40px] gap-[14px] w-full'>
                    <div className='max-w-[765px] w-full border-border-col border-2 h-[44px] flex  gap-[10px] py-[10px] px-[14px]  bg-white-col rounded-full'>
                        <MagnifyingGlassIcon className='w-[24px]' />
                        <input ref={focusOnSearch} className='w-full focus:outline-none' placeholder='Знайти страву, заклад' type="text"/>
                    </div>
                    <button className='bg-red-col h-[44px] px-[14px] text-white-col rounded-full'>Знайти</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;