import Header from "./components/Header.tsx";
import HomePage from "./pages/HomePage.tsx";
import Footer from "./components/Footer.tsx";
import {Route, Routes} from "react-router";
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
import Favorites from "./components/Profile/Favorites.tsx";
import PhoneFooterNav from "./components/PhoneFooterNav.tsx";
import AuthModal from "./components/AuthModal.tsx";
import CartModal from "./components/CartModal.tsx";
import OrderDone from "./pages/OrderDone.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import DeliveryAndPayment from "./pages/DeliveryAndPayment.tsx";

export default function App() {

    // const pathname = useLocation().pathname;
    const setAccessToken  = store(state => state.setAccessToken);

    useEffect(() => {
        const stored = localStorage.getItem('tokens');
        if (!stored) return;

        const tokens = JSON.parse(stored);
        if (tokens.access_token) {
            setAccessToken(tokens.access_token);
        }
    }, []);

    const setIsOpenAuthModal = store(state => state.setIsOpenAuthModal);
    const isOpenAuthModal = store(state => state.isOpenAuthModal);

    const isOpenCart = store(state => state.isOpenCart);
    const setIsOpenCart = store(state => state.setIsOpenCart);


    return (
        <>
            {isOpenAuthModal && (
                <AuthModal setIsOpenModal={setIsOpenAuthModal} />
            )}
            {isOpenCart && (
                <CartModal setIsOpenCart={setIsOpenCart} />
            )}



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
                        <Route path='favorites' element={<Favorites />} />
                    </Route>
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/order/done' element={<OrderDone />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/delivery-and-payment' element={<DeliveryAndPayment />} />
                    <Route path='*' element={<Page404 />} />
                </Routes>
            </main>
            <PhoneFooterNav />
            <Footer />
        </>
	)
}