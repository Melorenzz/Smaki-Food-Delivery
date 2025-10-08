import {useNavigate} from "react-router";
import {ChevronLeftIcon} from "@heroicons/react/16/solid";

const BackButton = ({isAbsolutePosition = false}: {isAbsolutePosition?: boolean}) => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(-1)} className={`w-[44px] ${isAbsolutePosition ? 'absolute' : 'static'} top-5 left-5 bg-gray-col/80 backdrop-blur-[20px] rounded-[14px] aspect-square p-[10px]`}>
            <ChevronLeftIcon className='w-full' />
        </button>
    );
};

export default BackButton;