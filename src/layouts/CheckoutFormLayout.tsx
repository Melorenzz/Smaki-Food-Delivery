import type {ReactNode} from "react";

const CheckoutFormLayout = ({children, subtitle}: {children: ReactNode, subtitle: string}) => {
    return (
        <div className='p-[20px] bg-white-col rounded-[28px]'>
            <h2 className='text-[18px] font-semibold '>{subtitle}</h2>
            {children}
        </div>
    );
};

export default CheckoutFormLayout;