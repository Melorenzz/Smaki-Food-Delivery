import {useLocation, useNavigate} from "react-router";
import {useGetProductsFromRestaurantQuery} from "../../hooks/useGetProductsFromRestaurantQuery.ts";
import {useGetRestaurantQuery} from "../../hooks/useGetRestaurantQuery.ts";
import MainLayout from "../../layouts/MainLayout.tsx";
import {ChevronLeftIcon, ShareIcon} from "@heroicons/react/16/solid";
import AboutRestaurant from "../../components/Restaurant/AboutRestaurant.tsx";
import ProductCard from "../../components/Restaurant/ProductCard.tsx";
import ShowMoreButton from "../../components/ShowMoreButton.tsx";
import {useEffect} from "react";

const RestaurantPage = () => {

    const pathname = useLocation().pathname;
    const id = pathname.split('/').pop();
    const {data, hasNextPage, fetchNextPage, isFetchingNextPage} = useGetProductsFromRestaurantQuery(id || '')
    const {data: restaurant} = useGetRestaurantQuery(id || '')
    const products = data?.pages.flatMap((page) => page.products) ?? [];

    useEffect(() => {
        console.log("Restaurant page loaded");
        console.log(products);
    }, [products]);

    // console.log('data', data?.pages[0].products)
    const navigate = useNavigate();
    return (
        <div>
            <div className='absolute top-0 -z-2 w-screen h-[300px] overflow-hidden flex items-center justify-center'>
                <img className='object-cover w-full' src={restaurant?.banner} alt=""/>
            </div>
            <MainLayout>
                <div className='flex  justify-between mb-[40px] mt-[calc(88px+40px)]'>
                    <button onClick={() => navigate(-1)} className='w-[44px] bg-gray-col/80 backdrop-blur-[20px] rounded-[14px] aspect-square p-[10px]'>
                        <ChevronLeftIcon className='w-full' />
                    </button>
                    <button className='w-[44px] bg-gray-col/80 backdrop-blur-[20px] rounded-[14px] aspect-square p-[10px]'>
                        <ShareIcon className='w-full' />
                    </button>
                </div>
            </MainLayout>
            <AboutRestaurant restaurant={restaurant} />
            <MainLayout>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[40px]'>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}

                </div>
                <div className='w-full mt-[21px] flex justify-center'>
                    {hasNextPage && (
                        <ShowMoreButton fetchNextPage={fetchNextPage} isFetchingNextPage={isFetchingNextPage} />
                    )}
                </div>
            </MainLayout>

        </div>
    );
};

export default RestaurantPage;