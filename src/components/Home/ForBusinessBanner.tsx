import H2 from "./H2.tsx";

const ForBusinessBanner = () => {
    return (
        <section className='mt-[50px]'>
            <H2>EatsEasy для бізнесу!</H2>
            <div className='flex text-center mt-[20px] text-white justify-center items-center flex-col gap-[15px] h-[500px] w-full rounded-[25px] bg-[url("./images/partner_image.bc467e10.jpg")] bg-center bg-cover'>
                <h3 className='font-bold text-[24px]'>EatsEasy для бізнесу!</h3>
                <p className='max-w-[410px] text-[18px]'>
                    Замовляйте смачні сніданки чи обіди, їжу для корпоративів в офісі. Ваші улюблені страви ми доставимо якнайшвидше.
                </p>
                <button className='text-[15px] font-bold px-[12px] py-[14px] rounded-full bg-red-col'>Спробувати</button>
            </div>
        </section>
    );
};

export default ForBusinessBanner;