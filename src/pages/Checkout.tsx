import MainLayout from "../layouts/MainLayout.tsx";
import {FormProvider, useForm} from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PersonalDataForm from "../components/checkout/PersonalDataForm.tsx";
import YourOrder from "../components/checkout/YourOrder.tsx";
import DeliveryAddress from "../components/checkout/DeliveryAddress.tsx";
import DeliveryDetails from "../components/checkout/DeliveryDetails.tsx";
import BackButton from "../components/BackButton.tsx";
import {useNavigate} from "react-router";
import {store} from "../store.ts";
import {useEffect} from "react";

const Checkout = () => {
    const cart = store(state => state.cart);

    const formSchema = z.object({
        firstName: z.string().min(1, "Can't be empty"),
        phoneNumber: z.string().min(10, 'Write correct phone number'),
        deliveryType: z.string(),
        street: z.string().min(1, "Can't be empty"),
        house: z.string().min(1, "Can't be empty"),
        apartment: z.string().min(1, "Can't be empty"),
        entrance: z.string().min(1, "Can't be empty"),
        floor: z.string().min(1, "Can't be empty"),
        comment: z.string().optional(),
        // email: z.email('Invalid email address'),
        paymentMethod: z.string(''),
        changeFromAmount: z.string().optional(),
    })

    const methods = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            phoneNumber: undefined,
            deliveryType: "delivery",
            street: '',
            house: '',
            apartment: undefined,
            entrance: undefined,
            floor: undefined,
            comment: '',
            paymentMethod: 'Готівка',
            changeFromAmount: undefined,

        },
        mode: "onSubmit"
    })
    const navigate = useNavigate()

    useEffect(() => {
        if(cart.length < 1){
            navigate('/')
        }
    }, []);
    return (
        <MainLayout>
            <div className='flex items-center mt-[calc(88px+22.5px)] sm:mt-[calc(88px+42.5px)] mb-[20px] sm:mb-[40px] gap-2'>
                <BackButton />
                <h1 className='text-[20px] sm:text-[32px] font-bold '>Оформити замовлення</h1>

            </div>
            <FormProvider {...methods}>
                <div className='flex flex-col md:flex-row gap-[40px]'>
                    <div className='flex-2 space-y-[20px]'>
                        <PersonalDataForm />
                        <DeliveryAddress />
                        <DeliveryDetails />
                    </div>
                    <YourOrder />
                </div>
            </FormProvider>
        </MainLayout>
    );
};

export default Checkout;