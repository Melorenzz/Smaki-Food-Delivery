import CheckoutFormLayout from "../../layouts/CheckoutFormLayout.tsx";
import Input from "./Input.tsx";
import {useFormContext} from "react-hook-form";
import {useState} from "react";

const PersonalDataForm = () => {
    const { setValue, formState: { errors } } = useFormContext();
    const [selected, setSelected] = useState<"delivery" | "pickup">("delivery");

    const handleSelect = (value: "delivery" | "pickup") => {
        setSelected(value);
        setValue("deliveryType", value);
    };

    const { register } = useFormContext();
    return (
        <CheckoutFormLayout subtitle='Персональні дані'>
            <div className='flex mt-[20px] gap-[20px]'>
                <Input error={(errors?.firstName?.message)?.toString()} register={register("firstName")} placeholder='Введіть ім’я' label='Ваше ім’я' />
                <Input error={(errors?.phoneNumber?.message)?.toString()} register={register("phoneNumber")} placeholder='+38 000 00 00 000' label='Телефон' />
            </div>
            <div className='bg-gray-col p-[4px] h-[44px] flex items-center gap-[5px] rounded-full mt-[20px]'>
                <button  onClick={() => handleSelect("delivery")} className={`${selected === 'delivery' ? 'bg-white-col text-black-col' : 'bg-none text-dark-gray'} w-full h-full rounded-full text-[14px] font-semibold`}>Доставка</button>
                <button onClick={() => handleSelect("pickup")} className={`${selected === "pickup" ? 'bg-white-col text-black-col' : 'bg-none text-dark-gray'}  w-full h-full rounded-full text-[14px] font-semibold`}>Самовивіз</button>
            </div>
        </CheckoutFormLayout>
    );
};

export default PersonalDataForm;