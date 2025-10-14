import Img from "../Img.tsx";
import type {IProductCard} from "../../types/types.ts";
import {store} from "../../store.ts";
import {useBasketAction} from "../../hooks/useBasketAction.ts";

const ProductCard = ({product}: {product: IProductCard}) => {
    // const [cart, setCart] = useState<IProductCard[]>([]);
    const addQuantity = store(state => state.addQuantity);
    const removeQuantity = store(state => state.removeQuantity);
    const isAuthenticated = store(state => state.isAuthenticated);
    // const {data: cartBd} = useGetBasket(isAuthenticated);
    // const cartStore = store(state => state.cart);

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         if (cartBd) setCart(cartBd);
    //     } else {
    //         setCart(cartStore);
    //     }
    // }, [cartBd, cartStore, isAuthenticated]);

    const { mutate } = useBasketAction();

    const changeQuantityBd = (data) => {

        mutate(
            {
                productId: data.id,
                quantity: data.quantity,
                restaurantId: data.restaurantId,
                sessionId: localStorage.getItem("sessionId") || undefined,
            },
            {
                onSuccess: () => {
                    console.log("success");
                },
                onError: (error) => {
                    console.log("error", error);
                },
            }
        );

    };
    return (
        <div className='p-[16px] w-full rounded-[20px] flex items-center gap-[16px] bg-white-col'>
            <Img src={product.image} className='max-w-[87px]  aspect-square' />
            <div className='flex flex-col h-[87px] w-full'>
                <div>
                    <h3 className='text-[14px] font-bold'>{product.name}</h3>
                    <p className='text-[14px] text-dark-gray'>
                        <span>{product.weight} г</span>
                    </p>
                </div>
                <div className='mt-auto w-full  flex justify-between items-center'>
                    <div>

                        <span className='text-[14px]'><span className='text-[16px] font-semibold'>{product?.price * (product?.quantityInBasket ?? 1)}</span>грн</span>
                        {(product?.quantityInBasket ?? 0) > 1 && (
                            <span className='text-[14px] '><span className='font-semibold '>{product?.price}</span> грн/шт</span>

                        )}
                    </div>
                    <div className='px-[10px] py-[2px] bg-gray-col  rounded-full flex items-center gap-[20px] justify-center'>
                        <button
                            onClick={() => {
                                if (isAuthenticated) {
                                    changeQuantityBd({
                                        id: product.id,
                                        quantity: (product.quantityInBasket ?? 1) - 1,
                                        restaurantId: product.restaurantId,
                                    });
                                } else {
                                    removeQuantity(product.id);
                                }
                            }}
                        >
                            -
                        </button>
                        <span className='font-semibold text-[16px]'>{product?.quantityInBasket}</span>
                        <button
                            onClick={() => {
                                if (isAuthenticated) {
                                    changeQuantityBd({
                                        id: product.id,
                                        quantity: (product.quantityInBasket ?? 1) + 1,
                                        restaurantId: product.restaurantId,
                                    });
                                } else {
                                    addQuantity(product.id);
                                }
                            }}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;