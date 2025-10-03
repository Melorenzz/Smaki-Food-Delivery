import type {IProductCard} from "../../types/types.ts";
import Img from "../Img.tsx";
import {PlusCircleIcon} from "@heroicons/react/24/outline";

const ProductCard = ({product}: {product: IProductCard}) => {
    return (
        <div className='bg-white-col p-[20px] flex items-center gap-[20px] rounded-[36px]'>
            <Img className='max-w-[150px] lg:max-w-[295px] aspect-square object-contain' src={product.image} />
            <div className='h-full w-full flex flex-col'>
                <div className='flex flex-col gap-[8px]'>
                    <span className='text-dark-gray text-[14px]'>{product.weight} г</span>
                    <h3 className='line-clamp-2 font-bold text-[16px] sm:text-[20px] leading-5 sm:leading-6'>{product.name}</h3>
                    <p className='line-clamp-3 text-dark-gray leading-4 sm:leading-5 text-[14px]'>{product.description}</p>
                </div>
                <div className='mt-auto flex items-end justify-between'>
                    <span className='text-[14px]'> <span className='font-bold text-[22px]'>{product.price}</span> грн</span>
                    <button className='w-[44px] aspect-square'>
                        <PlusCircleIcon className='w-full text-[#049F83]' />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;