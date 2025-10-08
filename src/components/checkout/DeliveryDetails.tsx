import CheckoutFormLayout from "../../layouts/CheckoutFormLayout.tsx";
import Input from "./Input.tsx";
import {useFormContext} from "react-hook-form";
import {useState} from "react";

const DeliveryDetails = () => {

    const [isOpenPaymentMethod, setIsOpenPaymentMethod] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Готівка');
    const { register } = useFormContext();
    const {setValue} = useFormContext();
    const handleChange = (value: string) => {
        setSelectedPaymentMethod(value);
        setValue('paymentMethod', value);
        setIsOpenPaymentMethod(false);
    }

    return (
        <CheckoutFormLayout subtitle='Деталі доставки'>
            <div className='flex w-full flex-wrap md:flex-row items-center gap-[20px] mt-[20px]'>
                <div className="relative min-w-[200px] flex-1 flex flex-col gap-[5px]">
                    <span className='ml-[14px] font-semibold text-[14px] text-dark-gray'>Форма оплати</span>
                    <div onClick={() => setIsOpenPaymentMethod(!isOpenPaymentMethod)} className="w-full p-[13.5px] text-dark-gray bg-gray-col rounded-full">
                        {selectedPaymentMethod}
                    </div>
                    {isOpenPaymentMethod && (
                        <div className='absolute flex flex-col items-start top-[calc(100%+10px)] overflow-hidden border-1 border-border-col bg-gray-col w-full rounded-3xl'>
                            <button className='w-full px-[13.5px] py-[15.5px] text-start hover:bg-white-col' onClick={() => handleChange('Готівка')}>Готівка</button>
                            <button className='w-full px-[13.5px] py-[15.5px] text-start hover:bg-white-col' onClick={() => handleChange("Картка")}>Картка</button>
                        </div>
                    )}

                </div>
                <Input placeholder='200 грн' label='Підготувати решту з' register={register("changeFromAmount")} />
            </div>
        </CheckoutFormLayout>
    );
};

export default DeliveryDetails;