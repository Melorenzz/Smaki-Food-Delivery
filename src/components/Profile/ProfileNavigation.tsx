import {UserCircleIcon} from "@heroicons/react/24/outline";
import {Link} from "react-router";
import {ChevronRightIcon} from "@heroicons/react/16/solid";

const ProfileNavigation = () => {

    const nav = [
        {icon: '', name: 'Особисті дані', link: ''},
        {icon: '', name: 'Особисті дані', link: ''},
        {icon: '', name: 'Особисті дані', link: ''},
        {icon: '', name: 'Особисті дані', link: ''},
        {icon: '', name: 'Особисті дані', link: ''},
        {icon: '', name: 'Особисті дані', link: ''},
    ]

    return (
        <div className="w-full flex-1">
           <div className='w-full flex items-center gap-[10px] py-[26px] px-[20px] rounded-[26px] bg-white-col'>
                <UserCircleIcon className='w-[40px] text-dark-gray aspect-square' />
                <div className='flex flex-col'>
                    <span className='font-semibold text-[16px]'>Андрей Коваленко</span>
                    <span className='text-[12px] text-dark-gray'>+38 (063)433-89-57</span>
                </div>
           </div>
            <nav className='rounded-[26px] p-[20px] mt-[10px] bg-white-col space-y-[21px]'>
                {nav.map((item, i) => (
                    <Link className='flex items-center justify-between' key={i} to=''>
                        <div className='flex items-center gap-[26px]'>
                            {item.icon}
                            <span className='text-[15px] font-semibold'>{item.name}</span>
                        </div>
                        <ChevronRightIcon className='w-[24px]' />
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default ProfileNavigation;