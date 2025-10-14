import ProfileNavigation from "../components/Profile/ProfileNavigation.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import {useGetUserQuery} from "../hooks/useGetUserQuery.ts";
import {store} from "../store.ts";
import {useEffect} from "react";
import {Outlet, useLocation, useNavigate} from "react-router";
import {HeartIcon, QuestionMarkCircleIcon, UserIcon} from "@heroicons/react/24/outline";


const ProfilePage = () => {

    const {data, isLoading} = useGetUserQuery()
    const setUser = store(state => state.setUser)
    const navigate = useNavigate();

    const link = useLocation().pathname;
    const pathname = link.split('/').pop();

    useEffect(() => {
        if(!isLoading){
            if(data?.data){
                setUser(data?.data)
            }else{
                navigate('/')
            }
        }
    }, [data?.data, isLoading, navigate, setUser]);

    if(isLoading){
        return <p>Loading...</p>
    }
    const nav = [
        {page: 'personal-data', icon: <UserIcon />, name: 'Особисті дані', link: '/profile/personal-data'},
        {page: 'questions', icon: <QuestionMarkCircleIcon />, name: 'Часті запитання', link: '/profile/questions'},
        {page: 'favorites', icon: <HeartIcon />, name: 'Збережене', link: '/profile/favorites'},
    ]
    const currentPage = nav.find(i => i.page === pathname)?.name;

    return (
        <MainLayout>
            <div className='flex flex-col md:flex-row gap-[39px] mt-[calc(88px+33px)]'>
                <ProfileNavigation nav={nav} />
                <div className='flex-2'>
                    <h1 className='text-[22px] font-bold mb-[20px]'>{currentPage}</h1>
                    <Outlet />
                </div>
            </div>
        </MainLayout>
    );
};

export default ProfilePage;