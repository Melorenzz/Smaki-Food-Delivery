import {XMarkIcon} from "@heroicons/react/16/solid";
import {store} from "../store.ts";
import Img from "./Img.tsx";
import {useNavigate} from "react-router";

const CartModal = ({setIsOpenCart}:  {setIsOpenCart: (isOpenCart: boolean) => void}) => {
    const cart = store(state => state.cart);
    const addQuantity = store(state => state.addQuantity);
    const removeQuantity = store(state => state.removeQuantity);
    const navigate = useNavigate();
    return (
        <div onClick={() => setIsOpenCart(false)} className='inset-0 animate-fade-left animate-duration-300 bg-black/30 fixed top-0 z-50'>
            <aside onClick={(e) => e.stopPropagation()} className='fixed flex flex-col right-0 top-0 h-screen  bg-gray-col  max-w-[420px] w-full'>
                <div className='flex items-center justify-between px-[14px] py-[20px]'>
                    <span className='text-[18px] font-semibold'>Кошик</span>
                    <button onClick={() => setIsOpenCart(false)} className='w-[44px] p-[6px] bg-white-col rounded-[15px]'>
                        <XMarkIcon />
                    </button>
                </div>
                <div className='px-[14px] flex flex-col gap-5 overflow-y-scroll'>
                    {cart && cart.length > 0 ? (
                        cart.map(product => (
                            <div key={product?.id} className=' p-[16px] bg-white-col rounded-[26px]'>
                                <div className='flex gap-[16px]'>
                                    <Img className='w-[90px] aspect-square' src={product.image} alt={product.name} />
                                    <div>
                                        <h2 className='font-bold text-[16px] leading-5'>{product.name}</h2>
                                        <span className='text-dark-gray text-[14px] mt-[6px]'>{product?.weight} г</span>
                                    </div>
                                </div>
                                <div className='flex justify-between mt-[16px] pb-[10px] pt-[26px] border-t border-border-col'>
                                    <div className='flex flex-col'>
                                        <span className='text-[14px]'><span className='font-bold text-[20px]'>{product?.price}</span> грн</span>
                                        {(product?.quantity ?? 0) > 1 && (
                                            <span className='text-[14px] '><span className='font-semibold '>{product?.price / (product?.quantity ?? 0)}</span> грн/шт</span>

                                        )}
                                    </div>
                                    <div className='px-[10px] py-[6px] border-2 border-col  rounded-full flex items-center gap-[20px] justify-center'>
                                        <button onClick={() => removeQuantity(product.id)}>-</button>
                                        <span className='font-semibold text-[16px]'>{product?.quantity}</span>
                                        <button onClick={() => addQuantity(product.id)}>+</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-center text-dark-gray'>Nothing here yet</p>
                    )}
                </div>
                <div className='bg-white-col w-full px-[14px] py-[20px] mt-auto'>
                    <div className='flex items-center justify-between mb-[20px]'>
                        <span className='text-dark-gray font-semibold'>До сплати:</span>
                        <span className='text-[14px]'><span className='text-[16px] font-semibold'>{cart.reduce((acc, i) => acc+ i.price, 0)}</span> грн</span>
                    </div>
                    <button onClick={() => navigate('/checkout')} disabled={cart.length < 1} className='w-full p-[12px] bg-green-col rounded-full text-[15px] font-semibold text-white-col'>
                        Оформити замовлення
                    </button>
                </div>

            </aside>
        </div>
    );
};

export default CartModal;