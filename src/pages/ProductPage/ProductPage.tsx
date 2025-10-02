import {useGetProductById} from "../../hooks/useGetProductById.ts";
import {useLocation, useNavigate} from "react-router";
import Img from "../../components/Img.tsx";
import {PlusCircleIcon} from "@heroicons/react/24/outline";
import {ChevronLeftIcon} from "@heroicons/react/16/solid";

const ProductPage = () => {
    const pathname = useLocation().pathname;
    const id = pathname.split('/').pop();
    const {data: product} = useGetProductById(id)
    const navigate = useNavigate();
    return (
        <div className='mx-auto max-w-[560px] w-full mt-[20px]'>
            <div className='aspect-square w-full rounded-[32px] overflow-hidden bg-white-col relative'>
                <button onClick={() => navigate(-1)} className='w-[44px] absolute aspect-square p-[10px]  top-[24px] left-[24px]'>
                    <ChevronLeftIcon className='w-full' />
                </button>
                <Img className='w-full object-contain' src={product?.image} alt=""/>
            </div>

            <div className='mt-[20px] bg-white-col rounded-[20px] p-[20px]'>
                <span className='text-dark-gray text-[14px]'>{product?.weight} г</span>
                <div className='flex items-center justify-between'>
                    <h2 className='font-bold line-clamp-2 text-[20px]'>{product?.name}</h2>
                    <span className='text-[14px]'><span className='text-[22px] font-bold'>{product?.price}</span> грн</span>
                </div>
                <p className='text-dark-gray text-[14px] line-clamp-2 leading-4 mt-[8px]'>{product?.description}</p>
                <div className='flex items-center justify-between gap-[11px] mt-[16px]'>
                    <button className='w-full py-[12px] bg-green-col text-white-col rounded-full'>У кошик</button>
                    <PlusCircleIcon className='w-[44px] aspect-square text-green-col' />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;