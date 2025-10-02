import {createPortal} from "react-dom";
import {DevicePhoneMobileIcon, XMarkIcon} from "@heroicons/react/16/solid";
import {Link} from "react-router";
import {UserIcon, ClipboardDocumentCheckIcon, HeartIcon, ShoppingCartIcon} from "@heroicons/react/24/outline";

interface INavigation {
    setIsOpenNavigation: (isOpen: boolean) => void;
}

const Navigation = ({setIsOpenNavigation}: INavigation) => {

    const navigationLinks = [
                {name: 'Заклади', link: '/restaurants'},
                {name: 'Акції', link: '/'},
                {name: 'Про нас', link: '/'},
                {name: 'Доставка та оплата', link: '/'},
    ]
    const profileLinks = [
        {icon: <UserIcon className='w-[24px] text-dark-gray' />, name: 'Мій профіль', link: '/'},
        {icon: <ClipboardDocumentCheckIcon className='w-[24px] text-dark-gray' />, name: 'Мої замовлення', link: '/'},
        {icon: <HeartIcon className='w-[24px] text-dark-gray' />, name: 'Збережене', link: '/'},
        {icon: <ShoppingCartIcon className='w-[24px] text-dark-gray' />, name: 'Кошик', link: '/'},
    ]

    return createPortal (
            <div onClick={() => setIsOpenNavigation(false)} className='fixed top-0 left-0 inset-0 bg-black/30 z-50'>
                <aside onClick={(e) => e.stopPropagation()} className='h-screen flex flex-col max-w-[380px] w-full rounded-r-[30px] fixed top-0 left-0 bg-white-col p-[20px]'>
                    <div className='flex items-center justify-between'>
                        <img src="/images/icons/logo.svg" alt="logo"/>
                        <button onClick={() => setIsOpenNavigation(false)} className='w-[44px] aspect-square p-[6px]'>
                            <XMarkIcon className='w-full' />
                        </button>
                    </div>
                    <nav className='mt-[50px] flex flex-col gap-[16px] text-[15px] font-semibold'>
                        {navigationLinks.map((link, index) => (
                            <Link key={index} onClick={() => setIsOpenNavigation(false)} to={link.link}>{link.name}</Link>
                        ))}
                    </nav>
                    <nav className='mt-auto flex py-[20px] border-y border-border-col flex-col gap-[16px] text-[15px] font-semibold'>
                        {profileLinks.map((link, index) => (
                            <Link key={index} onClick={() => setIsOpenNavigation(false)} className='flex items-center gap-[26px]' to={link.link}>
                                {link.icon}
                                {link.name}
                            </Link>
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