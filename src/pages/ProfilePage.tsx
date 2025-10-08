import ProfileNavigation from "../components/Profile/ProfileNavigation.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import {useGetUserQuery} from "../hooks/useGetUserQuery.ts";
import {store} from "../store.ts";
import {useEffect} from "react";
import {Outlet, useNavigate} from "react-router";


const ProfilePage = () => {

    const {data, isLoading} = useGetUserQuery()
    const setUser = store(state => state.setUser)
    const navigate = useNavigate();
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

    return (
        <MainLayout>
            <div className='flex gap-[39px] mt-[calc(88px+33px)]'>
                <ProfileNavigation />
                <div className='flex-2'>
                    <h1 className='text-[22px] font-bold mb-[20px]'>Особисті дані</h1>
                    <Outlet />
                </div>
            </div>
        </MainLayout>
    );
};

export default ProfilePage;