import MainLayout from "../layouts/MainLayout.tsx";

const Footer = () => {
    return (
        <footer>
            <MainLayout >
                <div className='bg-black-col my-[60px] rounded-[50px] pt-[40px] px-[60px] pb-[18px]'>
                    <div className='flex flex-wrap justify-between'>
                        <img src="/images/icons/logoWhite.svg" alt="logo"/>
                        <div className='flex mt-[50px] lg:mt-0 flex-wrap gap-[80px] text-dark-gray font-semibold'>
                            <ul className='flex flex-col gap-[18px]'>
                                <li>Заклади</li>
                                <li>Акції</li>
                                <li>Про нас</li>
                                <li>Доставка та оплата</li>
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