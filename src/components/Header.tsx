import {HeartIcon, ShoppingCartIcon, UserIcon} from "@heroicons/react/24/outline";
import MainLayout from "../layouts/MainLayout.tsx";
import {Bars3Icon, MagnifyingGlassIcon, XMarkIcon} from "@heroicons/react/16/solid";
import {useEffect, useRef, useState} from "react";
import Modal from "./Modal.tsx";
import {useRequestOtp} from "../hooks/useRequestOtp.ts";
import {useNavigate} from "react-router";
import Navigation from "./Navigation.tsx";
import {useVerifyOtp} from "../hooks/useVerifyOtp.ts";
import {store} from "../store.ts";
import Img from "./Img.tsx";
// import {useOauth} from "../hooks/useOauth.ts";

const Header = () => {
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const [userVerifyCode, setUserVerifyCode] = useState("");
    const [isOpenAuth, setIsOpenAuth] = useState(false);
    const [isOpenVerify, setIsOpenVerify] = useState(false);
    const [isOpenNavigation, setIsOpenNavigation] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false);
    const { mutate} = useRequestOtp();
    const { mutate: mutateVerify} = useVerifyOtp();
    const isAuthenticated = store(state => state.isAuthenticated);
    const navigation = useNavigate();
    const { theme, toggleTheme } = store();
    const cart = store(state => state.cart);



    const handleSendOtp = () => {
        setIsOpenVerify(true)
        setIsOpenAuth(false)
        mutate(userPhoneNumber, {
            onSuccess: (res: any) => {
                if (res.data.success) {
                    console.log("✅ OTP отправлен:", res.data);
                } else {
                    console.error("❌ Ошибка сервера:", res.data.message);
                }
            },
            onError: (err: any) => {
                console.error("❌ Ошибка запроса:", err);
            }
        });
    }
    const handleVerifyOtp = () => {
        setIsOpenVerify(false);
        mutateVerify(
            { phone: userPhoneNumber, code: userVerifyCode },
            {
                onSuccess: (res) => {
                    if (res.data.success) {
                        console.log("✅ :", res.data);
                        localStorage.setItem("tokens", JSON.stringify(res.data.data.tokens));
                        console.log(res.data.data.tokens)
                    } else {
                        console.error("❌ Ошибка сервера:", res.data.message);
                    }
                },
            }
        );
    };

    const openProfile = () => {
        if(isAuthenticated){
            navigation('/profile')
        }else{
            setIsOpenAuth(true)
        }
    }

    const navigate = useNavigate();
    return (
        <header className='rounded-bl-4xl fixed top-0 z-40 rounded-br-4xl bg-white-col shadow py-[20px] w-screen'>
            <MainLayout >
                <div className="w-full flex justify-between">
                    <div className='flex items-center gap-5'>
                        <button  onClick={() => setIsOpenNavigation(true)} className='rounded-2xl border-2 p-[6px]'>
                            <Bars3Icon className='w-[32px]' />
                        </button>
                        <button className='text-lg' onClick={toggleTheme}>
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>

                    </div>

                    <img className='cursor-pointer md:inline hidden' onClick={() => navigate('/')} src="/images/icons/logo.svg" alt="logo"/>
                    <div className='gap-[12px] md:flex hidden'>
                        <button className='h-[44px] w-[44px] flex items-center justify-center rounded-xl bg-gray-col'>
                            <MagnifyingGlassIcon className='w-[24px]' />
                        </button>
                        <button className='h-[44px] w-[44px] flex items-center justify-center rounded-xl bg-gray-col'>
                            <HeartIcon className='w-[24px]' />
                        </button>
                        <button onClick={openProfile} className='h-[44px] w-[44px] flex items-center justify-center rounded-xl bg-gray-col'>
                            <UserIcon className='w-[24px]' />
                        </button>
                        <button onClick={() => setIsOpenCart(true)} className='h-[44px] px-[14px] text-white-col font-semibold flex items-center gap-[8px] justify-center rounded-full bg-green-col'>
                            <ShoppingCartIcon className='w-[24px]' />
                            <span>Кошик</span>
                        </button>
                    </div>
                </div>
            </MainLayout>
            {isOpenAuth && (
                <Modal  setIsOpenModal={setIsOpenAuth} className='max-w-[440px] w-full'>
                    <Modal.Header onClose={() => setIsOpenAuth(false)}>
                        <span className='font-semibold text-[18px]'>Вхід</span>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='flex flex-col text-center'>
                            <span className='font-bold text-[20px]'>Ласкаво просимо</span>
                            <p className='text-dark-gray text-[16px] mt-[4px]'>Увійти по номеру телефону</p>
                            <label htmlFor="phone" className='text-left mt-[24px] text-[14px] font-semibold '>Мобільний телефон</label>
                            <input id='phone' className='w-full mt-[5px] px-[14px] py-[13.5px] bg-white-col rounded-full focus:outline-none' placeholder='+38 000 00 00 000' onChange={e => setUserPhoneNumber(e.target.value)} type="number"/>
                            <button className='w-full mt-[14px] px-[14px] py-[13.5px] bg-green-col rounded-full font-semibold text-white-col' onClick={handleSendOtp}>Continue</button>
                        </div>
                    </Modal.Body>
                </Modal>
            )}

            {isOpenVerify && (
                <Modal  setIsOpenModal={setIsOpenVerify} className='max-w-[440px] w-full'>
                    <Modal.Header onClose={() => setIsOpenVerify(false)}>
                        <span className='font-semibold text-[18px]'>Вхід</span>
                    </Modal.Header>
                    <Modal.Body>
                        <div className=' text-center'>
                            <span className='font-bold text-[20px]'>Код підтвердження</span>
                            <p className='text-dark-gray text-[16px] mt-[4px]'>На {userPhoneNumber} був
                                надісланий код для підтвердження</p>
                            <input className='w-full mt-[5px] px-[14px] py-[13.5px] bg-white-col rounded-full focus:outline-none' onChange={e => setUserVerifyCode(e.target.value)} type="number"/>


                            <button className='w-full mt-[14px] px-[14px] py-[13.5px] bg-green-col rounded-full font-semibold text-white-col' onClick={handleVerifyOtp}>Continue</button>
                        </div>
                    </Modal.Body>
                </Modal>
            )}

            {isOpenCart && (
                <div onClick={() => setIsOpenCart(false)} className='inset-0 animate-fade-left animate-duration-300 bg-black/30 fixed top-0 z-50'>
                    <aside onClick={(e) => e.stopPropagation()} className='fixed flex flex-col right-0 top-0 h-screen  bg-gray-col  max-w-[420px] w-full'>
                        <div className='flex items-center justify-between px-[14px] py-[20px]'>
                            <span className='text-[18px] font-semibold'>Кошик</span>
                            <button onClick={() => setIsOpenCart(false)} className='w-[44px] p-[6px] bg-white-col rounded-[15px]'>
                                <XMarkIcon />
                            </button>
                        </div>
                        <div className='px-[14px] flex flex-col gap-5 overflow-y-scroll'>
                            {cart.map(product => (
                                <div key={product?.id} className=' p-[16px] bg-white-col rounded-[26px]'>
                                    <div className='flex gap-[16px]'>
                                        <Img className='w-[90px] aspect-square' src={product.image} alt={product.name} />
                                        <div>
                                            <h2 className='font-bold text-[16px] leading-5'>{product.name}</h2>
                                            <span className='text-dark-gray text-[14px] mt-[6px]'>{product?.weight} г</span>
                                        </div>
                                    </div>
                                    <div className='flex justify-between mt-[16px] pb-[10px] pt-[26px] border-t border-border-col'>
                                        <span className='text-[14px]'><span className='font-bold text-[20px]'>{product?.price}</span> грн</span>
                                        <div className='px-[8px] py-[10px] border border-col  rounded-full flex items-center justify-between'>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='bg-white-col w-full px-[14px] py-[20px] mt-auto'>
                            <div className='flex items-center justify-between mb-[20px]'>
                                <span className='text-dark-gray font-semibold'>До сплати:</span>
                                <span className='text-[14px]'><span className='text-[16px] font-semibold'>{cart.reduce((acc, i) => acc+ i.price, 0)}</span> грн</span>
                            </div>
                            <button className='w-full p-[12px] bg-green-col rounded-full text-[15px] font-semibold text-white-col'>
                                Оформити замовлення
                            </button>
                        </div>

                    </aside>
                </div>
            )}

            {isOpenNavigation && (
                <Navigation setIsOpenNavigation={setIsOpenNavigation} />
            )}

        </header>
    );
};

export default Header;