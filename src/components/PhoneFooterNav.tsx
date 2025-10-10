import {Link} from "react-router";
import {HomeIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon} from "@heroicons/react/16/solid";
import {useState} from "react";

const PhoneFooterNav = () => {

    const [selectedCategory, setSelectedCategory] = useState('Головна');

    const nav = [
        {link: "/", name: 'Головна', icon: <HomeIcon className='w-[24px]' />},
        {link: "/", name: 'Пошук', icon: <MagnifyingGlassIcon className='w-[24px]' />},
        {link: "/product", name: 'Кошик', icon: <ShoppingCartIcon className='w-[24px]' />},
        {link: "/product", name: 'Профiль', icon: <UserIcon className='w-[24px]' />},
    ]

    return (
        <nav className='w-full p-[10px] flex justify-around items-center md:hidden bg-white-col fixed bottom-0 left-0'>

            {nav.map((item, index) => (
                <Link to={item.link} onClick={() => setSelectedCategory(item.name)} key={index} className={`text-[12px] ${selectedCategory === item.name ? 'text-red-col' : 'text-dark-gray'} font-semibold text-dark-gray flex flex-col items-center gap-[5px]`} >
                    {item.icon}
                    {item.name}
                </Link>
            ))}


        </nav>
    );
};

export default PhoneFooterNav;