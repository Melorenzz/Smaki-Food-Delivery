import ProfileNavigation from "../../components/Profile/ProfileNavigation.tsx";
import MainLayout from "../../layouts/MainLayout.tsx";


const ProfilePage = () => {
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