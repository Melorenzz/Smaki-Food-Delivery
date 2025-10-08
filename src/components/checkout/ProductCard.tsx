import Img from "../Img.tsx";
import type {IProductCard} from "../../types/types.ts";
import {store} from "../../store.ts";

const ProductCard = ({product}: {product: IProductCard}) => {
    const addQuantity = store(state => state.addQuantity);
    const removeQuantity = store(state => state.removeQuantity);

    return (
        <div className='p-[16px] w-full rounded-[20px] flex items-center gap-[16px] bg-white-col'>
            <Img src={product.image} className='max-w-[87px]  aspect-square' />
            <div className='flex flex-col h-[87px] w-full'>
                <div>
                    <h3 className='text-[14px] font-bold'>{product.name}</h3>
                    <p className='text-[14px] text-dark-gray'>
                        <span>{product.weight} г</span>
                    </p>
                </div>
                <div className='mt-auto w-full  flex justify-between items-center'>
                    <div>
                        <span className='text-[14px]'><span className='text-[16px] font-semibold'>{product.price}</span>грн</span>
                        {(product.quantity ?? 0) > 1 && (
                            <span className='text-[12px]'>/<span className='text-[14px] font-semibold'>{product.price / (product.quantity ?? 0)}</span>шт</span>
                        )}
                    </div>
                    <div className='px-[10px] py-[2px] bg-gray-col  rounded-full flex items-center gap-[20px] justify-center'>
                        <button onClick={() => removeQuantity(product.id)}>-</button>
                        <span className='font-semibold text-[16px]'>{product?.quantity}</span>
                        <button onClick={() => addQuantity(product.id)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;