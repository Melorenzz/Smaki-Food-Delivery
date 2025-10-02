import {HeartIcon, ShoppingCartIcon, UserIcon} from "@heroicons/react/24/outline";
import MainLayout from "../layouts/MainLayout.tsx";
import {Bars3Icon, MagnifyingGlassIcon} from "@heroicons/react/16/solid";
import {useState} from "react";
import Modal from "./Modal.tsx";
import {useRequestOtp} from "../hooks/useRequestOtp.ts";
import {useNavigate} from "react-router";
import Navigation from "./Navigation.tsx";
// import {useOauth} from "../hooks/useOauth.ts";

const Header = () => {
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const [isOpenAuth, setIsOpenAuth] = useState(false);
    const [isOpenNavigation, setIsOpenNavigation] = useState(false);
    const { mutate, isPending, isSuccess, isError } = useRequestOtp();
    // const { mutate, isPending, isSuccess, isError } = useOauth();

    const handleSendOtp = () => {
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



    // const handleOauth = () => {
    //     mutate({ email: "gomisha552@gmail.com", provider: "google" } , {
    //         onSuccess: (res) => {
    //             console.log("✅ Успех:", res);
    //         },
    //         onError: (err: any) => {
    //             console.error("❌ Ошибка:", err);
    //         }
    //     });
    //
    // };
    const navigate = useNavigate();
    return (
        <header className='rounded-bl-4xl rounded-br-4xl bg-white-col shadow py-[20px] w-screen'>
            <MainLayout >
                <div className="w-full flex justify-between">
                    <button  onClick={() => setIsOpenNavigation(true)} className='rounded-2xl border-2 p-[6px]'>
                        <Bars3Icon className='w-[32px]' />
                    </button>
                    <img className='cursor-pointer' onClick={() => navigate('/')} src="/images/icons/logo.svg" alt="logo"/>
                    <div className='flex gap-[12px]'>
                        <button className='h-[44px] w-[44px] flex items-center justify-center rounded-xl bg-gray-col'>
                            <MagnifyingGlassIcon className='w-[24px]' />
                        </button>
                        <button className='h-[44px] w-[44px] flex items-center justify-center rounded-xl bg-gray-col'>
                            <HeartIcon className='w-[24px]' />
                        </button>
                        <button onClick={() => setIsOpenAuth(true)} className='h-[44px] w-[44px] flex items-center justify-center rounded-xl bg-gray-col'>
                            <UserIcon className='w-[24px]' />
                        </button>
                        <button className='h-[44px] px-[14px] text-white-col font-semibold flex items-center gap-[8px] justify-center rounded-full bg-green-col'>
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
                        <div className=' text-center'>
                            <span className='font-bold text-[20px]'>Ласкаво просимо</span>
                            <p className='text-dark-gray text-[16px] mt-[4px]'>Увійти по номеру телефону</p>
                            <input onChange={e => setUserPhoneNumber(e.target.value)} type="number"/>
                            <button onClick={handleSendOtp}>Continue</button>
                        </div>
                    </Modal.Body>
                </Modal>
            )}

            {isOpenNavigation && (
                <Navigation setIsOpenNavigation={setIsOpenNavigation} />
            )}

        </header>
    );
};

export default Header;