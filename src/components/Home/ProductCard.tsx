import Img from "../Img.tsx";
import type {IProductCard} from "../../types/types.ts";
import {PlusCircleIcon} from "@heroicons/react/16/solid";


const ProductCard = ({product}: {product: IProductCard}) => {
    return (
        <div className='bg-white-col flex flex-col rounded-[36px] shadow p-[20px]'>
            <div className='aspect-square w-full '>
                <Img src={product.image} className='w-full h-full object-contain'  />
            </div>
            <div className=' my-[12px] flex flex-col gap-[8px]'>
                <span className='text-[14px] text-dark-gray'>{product.weight} г</span>
                <h3 className='font-bold text-[20px] line-clamp-2'>{product.name}</h3>
                <p className='mt-[8px] line-clamp-3 text-[14px] text-dark-gray leading-5'>{product.description}</p>
            </div>
            <div className='mt-auto flex justify-between items-end'>
                <span className='font-semibold text-[22px]'>{product.price} <span className='text-[14px] font-medium'>грн</span></span>
                <button className='aspect-square w-[44px]'>
                    <PlusCircleIcon />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;