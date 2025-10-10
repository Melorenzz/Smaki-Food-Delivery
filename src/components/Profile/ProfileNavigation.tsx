import {UserCircleIcon} from "@heroicons/react/24/outline";
import {Link, useLocation, useNavigate} from "react-router";
import {ChevronRightIcon} from "@heroicons/react/16/solid";
import {useEffect} from "react";
import {store} from "../../store.ts";
import type {ProfileNavigation} from "../../types/types.ts";

interface IProps {
    nav: ProfileNavigation[]
}

const ProfileNavigation = ({nav}: IProps) => {
    const user = store(state => state.user)

    useEffect(() => {
        console.log('use')
        console.log(user)
    }, [user])



    const pathname = useLocation().pathname;
    const page = pathname.split('/').pop()
    const navigate = useNavigate();
    function logout() {
        localStorage.removeItem('tokens')
        const { setUser, setIsAuthenticated } = store.getState();
        setUser(null);
        setIsAuthenticated(false);
        navigate('/')
    }

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
                <button onClick={logout} className='text-[15px] font-semibold hover:text-red-col transition w-full text-left'>
                    Вийти
                </button>
            </nav>
        </div>
    );
};

export default ProfileNavigation;