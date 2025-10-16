import {useGetFavorites} from "../../hooks/useGetFavorites.ts";
import {useEffect, useState} from "react";
import RestaurantPreview from "../RestaurantPreview.tsx";
import type {IProductCard, IRestaurant} from "../../types/types.ts";
import ProductCardWidth from "../ProductCardWidth.tsx";

const Favorites = () => {

    const {data: favorites} = useGetFavorites()

    useEffect(() => {
        console.log(favorites)
    }, [favorites]);

    const [selectedCategory, setSelectedCategory] = useState('restaurants');

    return (
        <div>
            <div className='flex justify-between'>
                <button onClick={() => setSelectedCategory('restaurants')} className={`flex-1 pb-[10px] border-b-1 font-semibold text-[16px] ${selectedCategory === 'restaurants' ? 'text-red-col border-b-red-col border-b-2' : 'text-dark-gray'}`}>Заклади</button>
                <button onClick={() => setSelectedCategory('products')} className={`flex-1 pb-[10px] border-b-1 text-dark-gray font-semibold text-[16px] ${selectedCategory === 'products' ? 'text-red-col border-b-red-col border-b-2' : 'text-dark-gray'}`}>Їжа</button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-[20px] mt-[20px]'>
                {selectedCategory === 'restaurants' ? (
                    favorites?.restaurants.length > 0 ? (
                        favorites?.restaurants.map((restaurant: IRestaurant) => (
                            <RestaurantPreview restaurant={restaurant} key={restaurant.id} />
                        ))
                    ) : (
                        <span className='text-center col-span-2'>Тут ще нічого немає</span>
                    )
                ) : (
                    favorites?.products.length > 0 ? (
                        favorites?.products.map((product: IProductCard) => (
                            <div key={product.id} className='col-span-2'>
                                <ProductCardWidth product={product}  />
                            </div>
                        ))
                    ) : (
                        <span className='text-center col-span-2'>Тут ще нічого немає</span>
                    )
                )}
            </div>

        </div>
    );
};

export default Favorites;