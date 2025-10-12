import {HeartIcon, ShoppingCartIcon, UserIcon} from "@heroicons/react/24/outline";
import MainLayout from "../layouts/MainLayout.tsx";
import {Bars3Icon, MagnifyingGlassIcon} from "@heroicons/react/16/solid";
import {useState} from "react";
import {useNavigate} from "react-router";
import Navigation from "./Navigation.tsx";
import {store} from "../store.ts";

const Header = () => {
    const [isOpenNavigation, setIsOpenNavigation] = useState(false);
    const isAuthenticated = store(state => state.isAuthenticated);
    const navigation = useNavigate();
    const { theme, toggleTheme } = store();
    const setIsOpenAuthModal = store(state => state.setIsOpenAuthModal);
    const setIsOpenCart = store(state => state.setIsOpenCart);

    const openProfile = () => {
        if(isAuthenticated){
            navigation('/profile/personal-data');
        }else{
            setIsOpenAuthModal(true)
        }
    }
    const navigate = useNavigate();
    return (
        <header className='rounded-bl-4xl fixed top-0 z-40 rounded-br-4xl bg-white-col shadow py-[20px] w-screen'>
            <MainLayout >
                <div className="w-full flex justify-between">
                    <div className='flex items-center gap-5'>
                        <button  onClick={() => setIsOpenNavigation(true)} className='rounded-2xl border-2 p-[6px]'>
                            <Bars3Icon className='w-[32px]' />
                        </button>
                        <button className='text-lg rounded-2xl border-2 p-[6px]' onClick={toggleTheme}>
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>

                    </div>
                    <img className='cursor-pointer md:inline hidden' onClick={() => navigate('/')} src={`${import.meta.env.BASE_URL}images/icons/logo.svg`} alt="logo"/>
                    <div className='gap-[12px] md:flex hidden'>
                        <button className='h-[44px] w-[44px] flex items-center justify-center rounded-xl bg-gray-col'>
                            <MagnifyingGlassIcon className='w-[24px]' />
                        </button>
                        <button onClick={() => isAuthenticated ? navigate('/profile/favorites') : setIsOpenAuthModal(true)} className='h-[44px] w-[44px] flex items-center justify-center rounded-xl bg-gray-col'>
                            <HeartIcon className='w-[24px]' />
                        </button>
                        <button onClick={openProfile} className='h-[44px] w-[44px] flex items-center justify-center rounded-xl bg-gray-col'>
                            <UserIcon className='w-[24px]' />
                        </button>
                        <button onClick={() => setIsOpenCart(true)} className='h-[44px] px-[14px] text-white-col font-semibold flex items-center gap-[8px] justify-center rounded-full bg-green-col'>
                            <ShoppingCartIcon className='w-[24px]' />
                            <span>Кошик</span>
                        </button>
                    </div>
                </div>
            </MainLayout>


            {isOpenNavigation && (
                <Navigation setIsOpenNavigation={setIsOpenNavigation} />
            )}

        </header>
    );
};

export default Header;