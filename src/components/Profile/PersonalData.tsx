import {store} from "../../store.ts";
import {PencilIcon} from "@heroicons/react/16/solid";
import {useEffect, useState} from "react";
import ChangeInputData from "./ChangeInputData.tsx";

const PersonalData = () => {
    const user = store(state => state.user)
    const [userName, setUserName] = useState(user?.userProfile?.firstName);
    const [userPhone, setUserPhone] = useState(user?.phone);
    const [isEditingUsername, setIsEditingUsername] = useState(false);
    const [isEditingPhone, setIsEditingPhone] = useState(false);
    useEffect(() => {
        if (user) {
            setUserName(user.userProfile?.firstName || "");
            setUserPhone(user.phone || "");
        }
    }, [user]);

    return (
        <>
            <div className=' space-y-[10px]'>
                <div className='w-full p-[16px] rounded-[16px] bg-white-col flex justify-between items-start'>
                    <div>
                        <h2 className='text-[14px] text-dark-gray'>Ім’я</h2>
                        {isEditingUsername ? (
                            <ChangeInputData data={userName || ''} setData={setUserName} />
                        ) : (
                            <p className='text-[14px] font-semibold'>{user?.userProfile?.firstName || 'Неизвестно'}</p>
                        )}
                    </div>
                    <button onClick={() => setIsEditingUsername(!isEditingUsername)} className='w-[24px] aspect-square'>
                        <PencilIcon className='w-full' />
                    </button>
                </div>

                <div className='w-full p-[16px] rounded-[16px] bg-white-col flex justify-between items-start'>
                    <div>
                        <h2 className='text-[14px] text-dark-gray'>Телефон</h2>
                        {isEditingPhone ? (
                                <ChangeInputData data={userPhone || ''} setData={setUserPhone} />

                        ) : (
                            <p className='text-[14px] font-semibold'>+{user?.phone}</p>
                        )}
                    </div>
                    <button onClick={() => setIsEditingPhone(!isEditingPhone)} className='w-[24px] aspect-square'>
                        <PencilIcon className='w-full' />
                    </button>
                </div>
                
            </div>
        </>
    );
};

export default PersonalData;