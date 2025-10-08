import CheckoutFormLayout from "../../layouts/CheckoutFormLayout.tsx";
import Input from "./Input.tsx";
import {useFormContext} from "react-hook-form";

const DeliveryAddress = () => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <CheckoutFormLayout subtitle='Адреса доставки'>
            <div className='flex gap-[20px] mt-[20px]'>
                <Input error={(errors?.street?.message)?.toString()} register={register("street")} label='Вулиця' placeholder='Введіть вулицю' />
                <Input error={(errors?.house?.message)?.toString()} register={register("house")} label='Будинок' placeholder='Введіть будинок' />
            </div>
            <div className='flex flex-wrap gap-[14px] mt-[20px]'>
                <Input error={(errors?.apartment?.message)?.toString()} register={register("apartment")} label='Квартира' placeholder='42' />
                <Input error={(errors?.entrance?.message)?.toString()} register={register("entrance")} label='Підїзд' placeholder='4' />
                <Input error={(errors?.floor?.message)?.toString()} register={register("floor")} label='Поверх' placeholder='6' />
            </div>
            <div className='mt-[20px]'>
                <Input error={(errors?.comment?.message)?.toString()} register={register("comment")} label='Коментар' placeholder='Введіть коментар' />
            </div>

        </CheckoutFormLayout>
    );
};

export default DeliveryAddress;