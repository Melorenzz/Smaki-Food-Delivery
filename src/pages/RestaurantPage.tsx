import {useLocation} from "react-router";
import {useGetProductsFromRestaurantQuery} from "../hooks/useGetProductsFromRestaurantQuery.ts";
import {useGetRestaurantQuery} from "../hooks/useGetRestaurantQuery.ts";
import MainLayout from "../layouts/MainLayout.tsx";
import {ChevronDownIcon, ShareIcon} from "@heroicons/react/16/solid";
import AboutRestaurant from "../components/Restaurant/AboutRestaurant.tsx";
import ProductCardWidth from "../components/ProductCardWidth.tsx";
import ShowMoreButton from "../components/ShowMoreButton.tsx";
import {useEffect, useMemo, useState} from "react";
import BackButton from "../components/BackButton.tsx";

const RestaurantPage = () => {

    const pathname = useLocation().pathname;
    const id = pathname.split('/').pop();
    const {data, hasNextPage, fetchNextPage, isFetchingNextPage} = useGetProductsFromRestaurantQuery(id || '')
    const {data: restaurant} = useGetRestaurantQuery(id || '')
    const products = data?.pages.flatMap((page) => page.products) ?? [];
    const [sortOrder, setSortOrder] = useState<'default' | 'asc' | 'desc'>('default');
    useEffect(() => {
        console.log("Restaurant page loaded");
        console.log(products);
    }, [products]);
    const sortedProducts = useMemo(() => {
        if (sortOrder === 'asc') {
            return [...products].sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'desc') {
            return [...products].sort((a, b) => b.price - a.price);
        }
        return products;
    }, [products, sortOrder]);
    const [open, setOpen] = useState(false);

    const options: { value: 'default' | 'asc' | 'desc'; label: string }[] = [
        { value: "default", label: "Без сортировки" },
        { value: "asc", label: "От дешёвого к дорогому" },
        { value: "desc", label: "От дорогого к дешёвому" },
    ];


    const selectedLabel = options.find(opt => opt.value === sortOrder)?.label;
    return (
        <div>
            <div className='absolute top-0 -z-2 w-screen h-[300px] overflow-hidden flex items-center justify-center'>
                <img className='object-cover w-full' src={restaurant?.banner} alt=""/>
            </div>
            <MainLayout>

                <div className='flex items-center justify-between mb-[40px] mt-[calc(88px+40px)]'>
                    <BackButton/>
                    <button className='w-[44px] bg-gray-col/80 backdrop-blur-[20px] rounded-[14px] aspect-square p-[10px]'>
                        <ShareIcon className='w-full' />
                    </button>
                </div>
            </MainLayout>
            <AboutRestaurant restaurant={restaurant} />
            <MainLayout>
                <div className="relative flex  my-6">
                    <div
                        className="relative w-[220px] bg-white-col backdrop-blur-md border border-border-col rounded-2xl px-4 py-2 flex items-center justify-between cursor-pointer transition-all hover:border-gray-400"
                        onClick={() => setOpen(!open)}
                    >
                        <span className="text-gray-800 text-sm font-medium select-none">{selectedLabel}</span>
                        <ChevronDownIcon
                            className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                                open ? "rotate-180" : ""
                            }`}
                        />
                    </div>

                    {open && (
                        <div className="absolute top-[110%] left-0 w-[220px] bg-white-col backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg overflow-hidden animate-fadeIn z-10">
                            {options.map((opt) => (
                                <div
                                    key={opt.value}
                                    onClick={() => {
                                        setSortOrder(opt.value);
                                        setOpen(false);
                                    }}
                                    className={`px-4 py-2 text-sm cursor-pointer transition-all ${
                                        sortOrder === opt.value
                                            ? "bg-gray-200 text-gray-900 font-medium"
                                            : "hover:bg-gray-100 text-gray-700"
                                    }`}
                                >
                                    {opt.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
                    {sortedProducts.map((product) => (
                        <ProductCardWidth key={product.id} product={product} />
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