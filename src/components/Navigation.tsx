import {createPortal} from "react-dom";
import {XMarkIcon} from "@heroicons/react/16/solid";

const Navigation = ({setIsOpenNavigation}: {setIsOpenNavigation: (isOpen: boolean) => void}) => {
    return createPortal (
        <div onClick={() => setIsOpenNavigation(false)} className='fixed top-0 left-0 inset-0 bg-black/30 z-50'>
            <div onClick={(e) => e.stopPropagation()} className='h-screen max-w-[380px] w-full rounded-r-[30px] fixed top-0 left-0 bg-white-col p-[20px]'>
                <div className='flex items-center justify-between'>
                    <img src="/images/icons/logo.svg" alt="logo"/>
                    <button onClick={() => setIsOpenNavigation(false)} className='w-[44px] aspect-square p-[6px]'>
                        <XMarkIcon className='w-full' />
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Navigation;