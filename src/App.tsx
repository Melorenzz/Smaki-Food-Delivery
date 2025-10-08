import Header from "./components/Header.tsx";
import HomePage from "./pages/HomePage.tsx";
import Footer from "./components/Footer.tsx";
import {Route, Routes, useLocation} from "react-router";
import RestaurantPage from "./pages/RestaurantPage.tsx";
import ScrollToTop from "./components/ScrollToTop.ts";
import ProductPage from "./pages/ProductPage.tsx";
import RestaurantsPage from "./pages/RestaurantsPage.tsx";
import Page404 from "./pages/404.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import {store} from "./store.ts";
import {useEffect} from "react";
import Checkout from "./pages/Checkout.tsx";
import PersonalData from "./components/Profile/PersonalData.tsx";
import Questions from "./components/Profile/Questions.tsx";

export default function App() {

    const pathname = useLocation().pathname;
    const setAccessToken  = store(state => state.setAccessToken);

    useEffect(() => {
        const stored = localStorage.getItem('tokens');
        if (!stored) return;

        const tokens = JSON.parse(stored);
        if (tokens.access_token) {
            setAccessToken(tokens.access_token);
        }
    }, []);



    return (
        <>
            <Header />
            <ScrollToTop />
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/restaurant/:id' element={<RestaurantPage />} />
                    <Route path='/product/:id' element={<ProductPage />} />
                    <Route path='/restaurants' element={<RestaurantsPage />} />
                    <Route path='/profile' element={<ProfilePage />}>
                        <Route path='personal-data' element={<PersonalData />} />
                        <Route path='questions' element={<Questions />} />
                    </Route>
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='*' element={<Page404 />} />
                </Routes>
            </main>
            { !pathname.startsWith("/product/") && <Footer /> }
        </>
	)
}