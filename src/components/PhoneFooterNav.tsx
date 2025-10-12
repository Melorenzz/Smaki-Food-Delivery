import { useNavigate} from "react-router";
import {HomeIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon} from "@heroicons/react/16/solid";
import {useState} from "react";
import {store} from "../store.ts";

const PhoneFooterNav = () => {
    const navigate = useNavigate();
    const isAuthenticated = store(state => state.isAuthenticated);
    const setIsOpenAuthModal = store(state => state.setIsOpenAuthModal);
    const setIsOpenCart = store(state => state.setIsOpenCart);

    const nav = [
        {action: () => navigate('/'), name: 'Головна', icon: <HomeIcon className='w-[24px]' />},
        {action: () => navigate('/'), name: 'Пошук', icon: <MagnifyingGlassIcon className='w-[24px]' />},
        {action: () => setIsOpenCart(true), name: 'Кошик', icon: <ShoppingCartIcon className='w-[24px]' />},
        {action: () => profileAction(), name: 'Профiль', icon: <UserIcon className='w-[24px]' />},
    ]

    const profileAction = () => {
        if(isAuthenticated) {
            navigate('/profile/personal-data');
        }else{
            setIsOpenAuthModal(true)
        }
    }

    return (
        <nav className='w-full p-[10px] flex justify-around items-center md:hidden bg-white-col fixed bottom-0 left-0 z-40'>

            {nav.map((item, index) => (
                <button onClick={item.action} key={index} className={`text-[12px]  font-semibold text-dark-gray flex flex-col items-center gap-[5px]`} >
                    {item.icon}
                    {item.name}
                </button>
            ))}


        </nav>
    );
};

export default PhoneFooterNav;