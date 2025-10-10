import MainLayout from "../layouts/MainLayout.tsx";
import PopularRestaurants from "../components/Home/PopularRestaurants.tsx";
import WhatOrderIn from "../components/Home/WhatOrderIn.tsx";
import Banner from "../components/Home/Banner.tsx";
import PopularCategories from "../components/Home/PopularCategories.tsx";
import ForBusinessBanner from "../components/Home/ForBusinessBanner.tsx";

const HomePage = () => {
    return (

        <MainLayout className='flex flex-col'>
            <Banner />
            <PopularCategories />
            <PopularRestaurants />
            <WhatOrderIn />
            <ForBusinessBanner />
        </MainLayout>
    );
};

export default HomePage;