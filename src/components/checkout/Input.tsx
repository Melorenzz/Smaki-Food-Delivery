import type {UseFormRegisterReturn} from "react-hook-form";

interface IInput {
    type?: string,
    label: string,
    placeholder: string,
    error?: string
    register: UseFormRegisterReturn;
}

const Input = ({type='text', error, label, placeholder, register}: IInput) => {
    return (
        <div className='flex flex-col gap-[5px] flex-1 min-w-[139px]'>
            <span className='ml-[14px] font-semibold text-[14px] text-dark-gray'>{label} <span className='text-red-col'>*</span></span>
            <input {...register} placeholder={placeholder} className='p-[13.5px] focus:outline-none w-full bg-gray-col rounded-full' type={type}/>
            <span className='text-[14px] text-red-col'>{error}</span>
        </div>
    );
};

export default Input;