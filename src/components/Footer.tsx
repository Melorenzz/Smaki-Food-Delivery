import MainLayout from "../layouts/MainLayout.tsx";
import {Link} from "react-router";

const Footer = () => {
    return (
        <footer>
            <MainLayout>
                <div className='bg-[#181818] my-[60px] rounded-[50px] pt-[40px] px-[60px] pb-[18px]'>
                    <div className='flex flex-wrap justify-between'>
                        <img src={`${import.meta.env.BASE_URL}images/icons/logo.svg`} alt="logo"/>
                        <div className='flex mt-[50px] lg:mt-0 flex-wrap gap-[80px] text-dark-gray font-semibold'>
                            <ul className='flex flex-col gap-[18px]'>
                                <li>
                                    <Link to='/restaurants'>
                                        Заклади
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/restaurants'>
                                        Акції
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        Про нас
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        Доставка та оплата
                                    </Link>
                                </li>
                            </ul>
                            <ul className='flex flex-col gap-[18px]'>
                                <li>Політика використання cookies</li>
                                <li>Договір публічної оферти</li>
                                <li>Політика конфіденційності</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-[100px] pt-[19px] flex border-t border-dark-gray'>
                        <span className='mx-auto text-dark-gray font-semibold text-[14px]'>© Smaki 2025</span>
                    </div>
                </div>
            </MainLayout>
        </footer>
    );
};

export default Footer;