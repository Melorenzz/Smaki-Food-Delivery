import MainLayout from "../../layouts/MainLayout.tsx";
import Search from "../../components/Home/Search.tsx";
import PopularRestaurants from "../../components/Home/PopularRestaurants.tsx";
import WhatOrderIn from "../../components/Home/WhatOrderIn.tsx";

const HomePage = () => {
    return (

        <MainLayout className='flex flex-col'>
            <Search />
            <PopularRestaurants />
            <WhatOrderIn />
        </MainLayout>
    );
};

export default HomePage;