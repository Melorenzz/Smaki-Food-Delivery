import {Link, useNavigate} from "react-router";

const Page404 = () => {

    const navigate = useNavigate();

    return (
        <div className='bg-white-col mt-[calc(88px+60px)] flex flex-col max-w-[500px] mx-auto  rounded-[30px] px-[50px] py-[20px]'>
            <h1 className='text-center text-[170px] font-bold text-red-col'>404</h1>
            <p className='text-[14px] leading-4 text-dark-gray text-center -mt-6'>Вибачте, але сторінка, яку ви шукаєте, не існує або була видалена.
                Спробуйте перевірити URL, повернутися на головну сторінку або скористатися меню для навігації.
            </p>
            <div className='flex items-center gap-5 mt-6'>
                <button onClick={() => navigate(-1)} className='flex-1 text-white-col bg-orange-col text-[15px] font-semibold py-[12px] px-[14px] rounded-full'>Назад</button>
                <Link to='/' className='flex-2 text-center text-white-col bg-green-col text-[15px] font-semibold py-[12px] px-[14px] rounded-full'>На главную</Link>
            </div>
        </div>

    );
};

export default Page404;