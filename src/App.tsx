import Header from "./components/Header.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import Footer from "./components/Footer.tsx";
import {Route, Routes, useLocation} from "react-router";
import RestaurantPage from "./pages/RestaurantPage/RestaurantPage.tsx";
import ScrollToTop from "./components/ScrollToTop.ts";
import ProductPage from "./pages/ProductPage/ProductPage.tsx";

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
                </Routes>
            </main>
            { !pathname.startsWith("/product/") && <Footer /> }
        </>
	)
}