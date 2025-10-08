import {UserCircleIcon} from "@heroicons/react/24/outline";
import {Link, useLocation} from "react-router";
import {ChevronRightIcon} from "@heroicons/react/16/solid";
import {useEffect} from "react";
import {store} from "../../store.ts";

const ProfileNavigation = () => {
    const user = store(state => state.user)

    useEffect(() => {
        console.log('use')
        console.log(user)
    }, [user])


    const nav = [
        {page: 'personal-data', icon: '', name: 'Особисті дані', link: '/profile/personal-data'},
        // {page: '', icon: '', name: 'Мої замовлення', link: ''},
        {page: 'questions', icon: '', name: 'Часті запитання', link: '/profile/questions'},
        // {page: '', icon: '', name: 'Відстежити замовлення', link: ''},
        // {page: '', icon: '', name: 'Збережене', link: ''},
        {page: '', icon: '', name: 'Вийти', link: ''},
    ]
    const pathname = useLocation().pathname;
    const page = pathname.split('/').pop()
    return (
        <div className="w-full flex-1">
           <div className='w-full flex items-center gap-[10px] py-[26px] px-[20px] rounded-[26px] bg-white-col'>
                <UserCircleIcon className='w-[40px] text-dark-gray aspect-square' />
                <div className='flex flex-col'>
                    <span className='font-semibold text-[16px]'>{user?.userProfile?.firstName || 'Користувач'}</span>
                    <span className='text-[12px] text-dark-gray'>+{user?.phone}</span>
                </div>
           </div>
            <nav className='rounded-[26px] p-[20px] mt-[10px] bg-white-col space-y-[21px]'>
                {nav.map((item, i) => (
                    <Link className={`flex items-center justify-between hover:text-red-col ${page === item.page ? 'text-red-col' : 'text-black-col'} transition `} key={i} to={item.link}>
                        <div className='flex items-center gap-[26px]'>
                            {item.icon}
                            <span className='text-[15px] font-semibold'>{item?.name}</span>
                        </div>
                        <ChevronRightIcon className='w-[24px]' />
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default ProfileNavigation;