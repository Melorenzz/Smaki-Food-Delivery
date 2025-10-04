import ProfileNavigation from "../../components/Profile/ProfileNavigation.tsx";
import MainLayout from "../../layouts/MainLayout.tsx";
import {useGetUserQuery} from "../../hooks/useGetUserQuery.ts";
import {store} from "../../store.ts";
import {useEffect} from "react";
import {useNavigate} from "react-router";


const ProfilePage = () => {

    const {data, isLoading} = useGetUserQuery()
    const setUser = store(state => state.setUser)
    const navigate = useNavigate();
    useEffect(() => {
        if(!isLoading){
            if(data?.data){
                setUser(data?.data)
            }else{
                console.log('t')
                navigate('/')
            }
        }
    }, [data?.data, isLoading, navigate, setUser]);

    if(isLoading){
        return <p>Loading...</p>
    }

    return (
        <MainLayout>
            <div className='flex gap-[39px] mt-[30px]'>
                <ProfileNavigation />
                <div className='flex-2'></div>
            </div>
        </MainLayout>
    );
};

export default ProfilePage;