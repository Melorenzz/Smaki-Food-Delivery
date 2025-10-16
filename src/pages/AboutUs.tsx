import MainLayout from "../layouts/MainLayout.tsx";

const AboutUs = () => {
    return (
        <MainLayout>
            <div className='bg-white-col max-w-[914px] mx-auto rounded-[28px] mt-[calc(88px+20px)] p-[30px] text-[14px]'>
                <h1 className='text-center text-[32px] font-bold'>Про нас</h1>
                <div className='flex justify-center gap-[20px] mt-[30px] flex-wrap'>
                    <img src={`${import.meta.env.BASE_URL}images/AboutUs/SmakiLogo.png`} alt="logo"/>
                    <img src={`${import.meta.env.BASE_URL}images/AboutUs/burger-with-french-fries-ketchup.png`} alt="logo"/>
                </div>
                <p className=' mt-[30px] leading-4'>
                    <strong>SMAKI</strong> - це сучасна сервіс-платформа, яка об’єднала найкращі пропозиції від лідируючих сайтів-доставки смачної піци, суші, сетів у Львові: <strong>Smaki-maki, Sushi Go, Donatello Pizza, Moonfish та Oh My Pizza.</strong>
                </p>
                <div className='flex justify-center gap-[15px] my-[30px] flex-wrap'>
                    <img src={`${import.meta.env.BASE_URL}images/AboutUs/1.png`} alt="logo"/>
                    <img src={`${import.meta.env.BASE_URL}images/AboutUs/2.png`} alt="logo"/>
                    <img src={`${import.meta.env.BASE_URL}images/AboutUs/3.png`} alt="logo"/>
                    <img src={`${import.meta.env.BASE_URL}images/AboutUs/4.png`} alt="logo"/>
                    <img src={`${import.meta.env.BASE_URL}images/AboutUs/5.png`} alt="logo"/>
                </div>
                <p className=' mt-[30px] leading-4'>
                    Обирай, що сьогодні смакує найкраще і роби це зручно, швидко, вигідно! Достойний вибір страв на всі вподобання та під будь-які події, вигідні акційні пропозиції, широка мережа закладів для самовивозу та приємні бонуси - відтепер все в одній платформі.
                </p>
                <p className='mt-[30px] leading-4'>
                    Ми впевнені, що саме безкомпромісна якість та свіжість інгредієнтів, майстерність та досвід наших кухарів - є запорукою бездоганного результату та ваших смачних вражень!
                </p>
                <ul className='mt-[30px] space-y-[10px] font-semibold text-[14px]'>
                    <li>Любиш смачно поїсти, але не любиш готувати?</li>
                    <li>Домашній клопіт не залишив сил на приготування вечері?</li>
                    <li>Багато працюєш і бракує часу на ланч? </li>
                    <li>Чи ви просто плануєте приємну зустріч із друзями з улюбленими суші й піцею? </li>

                </ul>
                <p className='mt-[10px] leading-4 '>
                    Тоді ми точно знаємо, як задовольнити всі побажання. Обирай смачні роли, сети, піцу в будь-якого партнера платформи та замовляй!
                </p>
                <h2 className='my-[30px] text-[20px] font-bold'>Звісно ж, SMAKI пропонує цікаві акції та вигідні пропозиції:</h2>
                <ul className='list-disc ml-[30px] space-y-[10px]'>
                    <li>Акція 2+1 на все піца-меню: Кожна третя піца - безкоштовно з понеділка по четвер</li>
                    <li>Акція «3+1» діє в п’ятницю, суботу та неділю, а також у святкові дні. </li>
                    <li>Замовляйте 4 піци, а платіть за 3!</li>
                    <li>Подарунок на День народження </li>
                    <li>Даруємо 10% знижки на замовлення із самовивозом</li>
                </ul>
                <p className='mt-[10px]'>*Повний перелік умов та актуальних пропозицій дивіться в обраного бренду-партнера</p>
            </div>
        </MainLayout>
    );
};

export default AboutUs;