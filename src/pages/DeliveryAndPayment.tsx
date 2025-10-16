import MainLayout from "../layouts/MainLayout.tsx";

const DeliveryAndPayment = () => {

    const payment = ['– онлайн на сайті', '– готівкою при отриманні замовлення', '– картою через термінал кур’єра при отриманні']

    const delivery = [
        {title: 'Вартість доставки для Smaki-maki і Sushi Go:', greenZone: 'Зелена зона: до 700 грн – доставка 50 грн; від 700 грн – безкоштовно', yellowZone: 'Жовта зона: до 1000 грн – доставка 100 грн; від 1000 грн – безкоштовно'},
        {title: 'Вартість доставки для Smaki-maki і Sushi Go:', greenZone: 'Зелена зона: до 700 грн – доставка 50 грн; від 700 грн – безкоштовно', yellowZone: 'Жовта зона: до 1000 грн – доставка 100 грн; від 1000 грн – безкоштовно'},
        {title: 'Вартість доставки для Smaki-maki і Sushi Go:', greenZone: 'Зелена зона: до 700 грн – доставка 50 грн; від 700 грн – безкоштовно', yellowZone: 'Жовта зона: до 1000 грн – доставка 100 грн; від 1000 грн – безкоштовно'},

    ]
    return (
        <MainLayout>
            <div className='max-w-[914px] mx-auto rounded-[28px] bg-white-col p-[30px] mt-[calc(88px+20px)]'>
                <h1 className='text-[32px] font-bold'>Доставка та оплата</h1>
                <div className='mt-[30px] pb-[30px] border-b border-border-col'>
                    <h2 className='font-semibold'>Оплатити замовлення Ви можете:</h2>
                    <ul>
                        {payment.map((item, index) => (
                            <li className='mt-[5px]' key={index}>{item}</li>
                        ))}
                    </ul>

                </div>


                {delivery.map((item, index) => (
                    <div className='space-y-[12px] mt-[30px] border-b border-border-col pb-[30px]' key={index}>
                        <h2 className='font-semibold'>{item.title}</h2>
                        <p className='flex items-center gap-[6px]'>
                            <div className='w-[18px] aspect-square rounded-full bg-[#049F83]'></div>
                            {item.greenZone}
                        </p>
                        <p className='flex items-center gap-[6px]'>
                            <div className='w-[18px] aspect-square rounded-full bg-[#FFE223]'></div>
                            {item.yellowZone}
                        </p>
                    </div>
                ))}
                <p className='mt-[30px] pb-[30px]'>
                    Під час повітряної тривоги та відключеннях світла доставка здійснюється до 5 поверху включно.
                    Дякуємо за розуміння!
                </p>
            </div>
        </MainLayout>
    );
};

export default DeliveryAndPayment;