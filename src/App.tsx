import Header from "./components/Header.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import Footer from "./components/Footer.tsx";
import {Route, Routes} from "react-router";
import RestaurantPage from "./pages/RestaurantPage/RestaurantPage.tsx";
import ScrollToTop from "./components/ScrollToTop.ts";

export default function App() {
	return (
        <>
            <Header />
            <ScrollToTop />
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/restaurant/:id' element={<RestaurantPage />} />
                </Routes>
            </main>
            <Footer />
        </>
	)
}