import type {ReactNode} from "react";

export interface ModalProps {
    children: ReactNode;
}
export interface MainModalProps extends ModalProps {
    className?: string;
    setIsOpenModal: (isOpenModal: boolean) => void ;
}
export interface ModalHeaderProps extends ModalProps {
    onClose: () => void;
}
