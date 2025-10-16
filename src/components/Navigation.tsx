import {createPortal} from "react-dom";
import {DevicePhoneMobileIcon, XMarkIcon} from "@heroicons/react/16/solid";
import {Link, useNavigate} from "react-router";
import {UserIcon, HeartIcon, ShoppingCartIcon} from "@heroicons/react/24/outline";
import {store} from "../store.ts";

interface INavigation {
    setIsOpenNavigation: (isOpen: boolean) => void;
}

const Navigation = ({setIsOpenNavigation}: INavigation) => {
    const setIsOpenAuthModal = store(state => state.setIsOpenAuthModal);
    const isAuthenticated = store(state => state.isAuthenticated);
    const setIsOpenCart = store(state => state.setIsOpenCart);

    const navigationLinks = [
                {name: 'Заклади', link: '/restaurants'},
                // {name: 'Акції', link: '/'},
                {name: 'Про нас', link: '/about'},
                {name: 'Доставка та оплата', link: '/delivery-and-payment'},
    ]
    const profileLinks = [
        {icon: <UserIcon className='w-[24px] text-dark-gray' />, name: 'Мій профіль', action: () => profileAction()},
        {icon: <HeartIcon className='w-[24px] text-dark-gray' />, name: 'Збережене', action: () => favoriteAction()},
        {icon: <ShoppingCartIcon className='w-[24px] text-dark-gray' />, name: 'Кошик', action: () => setIsOpenCart(true)},
    ]

    const navigate = useNavigate();

    const profileAction = () => {
        if(isAuthenticated) {
            navigate('/profile/personal-data');
        }else{
            setIsOpenAuthModal(true)
        }
    }

    const favoriteAction = () => {
        if(isAuthenticated) {
            navigate('/profile/favorites');
        }else {
            setIsOpenAuthModal(true)
        }
    }



    return createPortal (
            <div onClick={() => setIsOpenNavigation(false)} className='fixed top-0 left-0 inset-0 bg-black/30 z-50'>
                <aside onClick={(e) => e.stopPropagation()} className='h-screen flex flex-col max-w-[270px] sm:max-w-[380px] w-full rounded-r-[30px] fixed top-0 left-0 bg-white-col p-[20px] animate-duration-300  animate-fade-right '>
                    <div className='flex items-center justify-between'>
                        <img className='sm:max-w-[200px] max-w-[150px] ' src={`${import.meta.env.BASE_URL}images/icons/logo.svg`} alt="logo"/>
                        <button onClick={() => setIsOpenNavigation(false)} className='min-w-[44px] w-[44px] aspect-square p-[6px]'>
                            <XMarkIcon className='w-full' />
                        </button>
                    </div>
                    <nav className='mt-[50px] flex flex-col gap-[16px] text-[15px] font-semibold'>
                        {navigationLinks.map((link, index) => (
                            <Link className='border-b-1 w-fit transition border-transparent hover:border-black-col' key={index} onClick={() => setIsOpenNavigation(false)} to={link.link}>{link.name}</Link>
                        ))}
                    </nav>
                    <nav className='mt-auto flex py-[20px] border-y border-border-col flex-col gap-[16px] text-[15px] font-semibold'>
                        {profileLinks.map((item, index) => (
                            <button key={index}
                                    onClick={() => {setIsOpenNavigation(false); item.action()}}
                                    className='flex items-center gap-[26px]'>
                                {item.icon}
                                <span className='border-b-1 w-fit transition border-transparent hover:border-black-col'>
                                {item.name}

                                </span>
                            </button>
                        ))}
                    </nav>
                    <span className='mt-[20px] flex items-center gap-[7px] text-[16px] font-semibold'>
                        <DevicePhoneMobileIcon className='w-[22px] aspect-square' />
                        0 800 204 090
                    </span>
                </aside>
            </div>
        ,
        document.body
    );
};

export default Navigation;