import {MagnifyingGlassIcon} from "@heroicons/react/16/solid";
import {useEffect, useRef} from "react";

const Search = () => {

    const focusOnSearch = useRef<HTMLInputElement | null>(null);

    return (
            <div onClick={() => focusOnSearch?.current?.focus()} className='flex justify-center items-center  mt-[40px] gap-[14px] w-full'>
                <div className='max-w-[765px] w-full border-border-col border-2 h-[44px] flex  gap-[10px] py-[10px] px-[14px]  bg-white-col rounded-full'>
                    <MagnifyingGlassIcon className='w-[24px]' />
                    <input ref={focusOnSearch} className='w-full focus:outline-none' placeholder='Знайти страву, заклад' type="text"/>
                </div>
                <button className='bg-red-col h-[44px] px-[14px] text-white-col rounded-full'>Знайти</button>
            </div>
    );
};

export default Search;