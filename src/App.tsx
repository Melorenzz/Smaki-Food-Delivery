import Header from "./components/Header.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import Footer from "./components/Footer.tsx";
import {Route, Routes, useLocation} from "react-router";
import RestaurantPage from "./pages/RestaurantPage/RestaurantPage.tsx";
import ScrollToTop from "./components/ScrollToTop.ts";
import ProductPage from "./pages/ProductPage/ProductPage.tsx";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage.tsx";
import Page404 from "./pages/404/404.tsx";

export default function App() {

    const pathname = useLocation().pathname;

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
                    <Route path='*' element={<Page404 />} />
                </Routes>
            </main>
            { !pathname.startsWith("/product/") && <Footer /> }
        </>
	)
}