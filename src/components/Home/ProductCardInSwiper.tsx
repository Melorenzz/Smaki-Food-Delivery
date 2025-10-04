import type {IProductCard} from "../../types/types.ts";
import Img from "../Img.tsx";
import {Link} from "react-router";

const ProductCardInSwiper = ({product}: {product: IProductCard}) => {
    return (
        <Link to={`/product/${product.id}`} className='max-w-[221px] border-2 transition border-transparent hover:border-red-col h-full flex flex-col w-full shrink-0 p-[20px] rounded-[32px] shadow'>
            <Img className='aspect-square object-contain  w-full' src={product?.image} alt={product.name} />
            <h3 className='font-bold line-clamp-2 text-[20px] leading-6'>{product.name}</h3>
            <span className='mt-auto text-[22px] font-bold block'>{product.price} <span className='font-medium text-[14px]'>грн</span></span>
        </Link>
    );
};

export default ProductCardInSwiper;