import Modal from "./Modal.tsx";
import {useState} from "react";
import {useNavigate} from "react-router";
import {useRequestOtp} from "../hooks/useRequestOtp.ts";
import {useVerifyOtp} from "../hooks/useVerifyOtp.ts";
import {store} from "../store.ts";

const AuthModal = ({setIsOpenModal}: {setIsOpenModal: (isOpenModal: boolean) => void}) => {
    const [isOpenAuth, setIsOpenAuth] = useState(true);
    const [isOpenVerify, setIsOpenVerify] = useState(false);
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const [userVerifyCode, setUserVerifyCode] = useState("");
    const navigation = useNavigate();
    const { mutate} = useRequestOtp();
    const { mutate: mutateVerify} = useVerifyOtp();
    const setIsAuthenticated = store(state => state.setIsAuthenticated);

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
        mutateVerify(
            { phone: userPhoneNumber, code: userVerifyCode },
            {
                onSuccess: (res) => {
                    setIsOpenModal(false);
                    if (res.data.success) {
                        console.log("✅ :", res.data);
                        localStorage.setItem("tokens", JSON.stringify(res.data.data.tokens));
                        navigation('/profile/personal-data');
                        setIsAuthenticated(true)
                        console.log(res.data.data.tokens)
                    } else {
                        console.error("❌ Ошибка сервера:", res.data.message);
                    }
                },
                onError: (err) => {
                    console.error("❌ Ошибка запроса:", err);
                },
            }
        );
    };

    return (
        <Modal setIsOpenModal={setIsOpenModal}>
            {isOpenAuth && (
                <>
                    <Modal.Header onClose={() => setIsOpenModal(false)}>
                        <span className='font-semibold text-[18px]'>Вхід</span>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='flex flex-col text-center'>
                            <span className='font-bold text-[20px]'>Ласкаво просимо</span>
                            <p className='text-dark-gray text-[16px] mt-[4px]'>Увійти по номеру телефону</p>
                            <label htmlFor="phone" className='text-left mt-[24px] text-[14px] font-semibold '>Мобільний телефон</label>
                            <div className='w-full flex mt-[5px] px-[14px] py-[13.5px] bg-white-col rounded-full '>
                                <span>+38</span>
                                <input id='phone' className='flex-1 focus:outline-none' placeholder=' 000 00 00 000' onChange={e => setUserPhoneNumber(38 + e.target.value)} type="number"/>
                            </div>
                            <button className='w-full mt-[14px] px-[14px] py-[13.5px] bg-green-col rounded-full font-semibold text-white-col' onClick={handleSendOtp}>Continue</button>
                        </div>
                    </Modal.Body>
                </>
            )}
            {isOpenVerify && (
                <>
                    <Modal.Header onClose={() => setIsOpenModal(false)}>
                        <span className='font-semibold text-[18px]'>Вхід</span>
                    </Modal.Header>
                    <Modal.Body>
                        <div className=' text-center'>
                            <span className='font-bold text-[20px]'>Код підтвердження</span>
                            <p className='text-dark-gray text-[16px] mt-[4px]'>
                                На {userPhoneNumber} був
                                надісланий код для підтвердження
                            </p>

                            <input className='w-full mt-[5px] px-[14px] py-[13.5px] bg-white-col rounded-full focus:outline-none' onChange={e => setUserVerifyCode(e.target.value)} type="number"/>
                            <button className='w-full mt-[14px] px-[14px] py-[13.5px] bg-green-col rounded-full font-semibold text-white-col' onClick={handleVerifyOtp}>Continue</button>
                        </div>
                    </Modal.Body>
                </>
            )}
        </Modal>
    );
};

export default AuthModal;