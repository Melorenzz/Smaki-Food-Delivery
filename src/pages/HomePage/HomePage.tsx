import MainLayout from "../../layouts/MainLayout.tsx";
import Search from "../../components/Home/Search.tsx";
import PopularRestaurants from "../../components/Home/PopularRestaurants.tsx";
import WhatOrderIn from "../../components/Home/WhatOrderIn.tsx";
import Banner from "../../components/Home/Banner.tsx";

const HomePage = () => {
    return (

        <MainLayout className='flex flex-col'>

            <Banner />
            <PopularRestaurants />
            <WhatOrderIn />
        </MainLayout>
    );
};

export default HomePage;