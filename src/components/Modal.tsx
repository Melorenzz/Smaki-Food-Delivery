import {createPortal} from "react-dom";
import {XMarkIcon} from "@heroicons/react/16/solid";
import type {MainModalProps, ModalHeaderProps, ModalProps} from "../types/modal-types/modal.types.ts";


const Modal = ({children, className, setIsOpenModal}: MainModalProps) => {
    return createPortal(
        <div onClick={() => setIsOpenModal(false)} className={`fixed inset-0 z-100 bg-black/25 flex items-center justify-center`}>
            <div onClick={(e) => e.stopPropagation()} className={`bg-gray-col animate-fade-up animate-duration-400 p-[20px] rounded-0 md:rounded-[32px] md:w-[440px] w-full md:h-auto h-full ${className}`}>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;

Modal.Header = ({children, onClose}: ModalHeaderProps) => (
    <div className='flex items-center justify-between'>
        {children}
        <button onClick={onClose} className='p-[13px] w-[44px] h-[44px] bg-white-col rounded-[15px]'>
            <XMarkIcon className='w-full' />
        </button>
    </div>
)

Modal.Body = ({children}: ModalProps) => (
    <>
        {children}
    </>
)

Modal.Footer = ({children}: ModalProps) => (
    <>
        {children}
    </>
)