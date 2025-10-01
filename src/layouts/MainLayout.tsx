import type {ReactNode} from "react";

const MainLayout = ({children, className=''}: {children: ReactNode, className?: string}) => {
    return (
        <div className={`mx-auto max-w-[1320px] px-[10px] w-full ${className}`}>
            {children}
        </div>
    );
};

export default MainLayout;