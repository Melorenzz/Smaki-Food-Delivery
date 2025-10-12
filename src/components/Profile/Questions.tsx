import {useState} from "react";

const Questions = () => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
    const questionsList = [
        {
            title: "Як знайти потрібну страву чи заклад?",
            subtitle:
                "Ви можете скористатися пошуком на головній сторінці, вибрати категорію страв або скористатися фільтрами для швидкого пошуку.",
        },
        {
            title: "Як оформити замовлення?",
            subtitle:
                "Додайте страву в кошик, перевірте замовлення та натисніть «Оформити».",
        },
        {
            title: "Чи можна оплатити карткою?",
            subtitle:
                "Так, ви можете оплатити онлайн або під час отримання замовлення.",
        },
    ];

    return (
        <div>
            <div className='space-y-5'>
                {questionsList.map((question, index) => (
                    <div onClick={() => setActiveQuestion(activeQuestion === index ? null : index)} key={index} className='rounded-[16px] p-[14px] w-full bg-white-col'>
                        <h2 className='font-medium'>{question.title}</h2>
                        {activeQuestion === index && (
                            <p className='mt-5 text-dark-gray'>{question.subtitle}</p>

                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Questions;