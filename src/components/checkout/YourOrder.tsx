import {useFormContext} from "react-hook-form";
import {ChevronRightIcon} from "@heroicons/react/16/solid";
import {store} from "../../store.ts";
import ProductCard from "./ProductCard.tsx";

const YourOrder = () => {
    const { handleSubmit } = useFormContext();


    const onSubmit = (data) => {
        console.log("Form data:", data);
    };

    const onError = (errors) => {
        console.log("Form errors:", errors);
    };

    const cart = store(state => state.cart);



    return (
        <div className='flex-1'>
            <h2 className='text-[18px] font-semibold'>Ваше замовлення</h2>

            <div className='rounded-[28px] space-y-[10px] max-h-[447px] overflow-y-scroll my-[12px]'>
                {cart.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className='bg-white-col p-[20px] rounded-[28px] '>
                <button
                    onClick={handleSubmit(onSubmit, onError)}
                    className='mt-4 bg-green-col text-white font-semibold w-full rounded-full p-[12px] flex items-center justify-center gap-1'
                >
                    Замовити
                    <ChevronRightIcon className='w-[23px]' />
                </button>
            </div>

        </div>
    );
};

export default YourOrder;
