import { useGetProductsFromRestaurantQuery } from "../../hooks/useGetProductsFromRestaurantQuery.ts";
import ProductCard from "./ProductCard.tsx";
import type { IProductCard } from "../../types/types.ts";
import ShowMoreButton from "../ShowMoreButton.tsx";

const WhatOrderIn = () => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useGetProductsFromRestaurantQuery("27d6a336-5011-4408-8c20-015a3d8801cd");
    console.log('tyy')
    console.log(data)
    const products = data?.pages.flatMap((page) => page.products) ?? [];
    console.log(products);
    return (
        <section className="mt-[60px] flex flex-col">
            <h2 className="text-[32px] font-extrabold">Що замовити у Eats Easy</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[26px] mb-[21px]">
                {products.map((product: IProductCard) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>

            {hasNextPage && (
                <ShowMoreButton fetchNextPage={fetchNextPage} isFetchingNextPage={isFetchingNextPage} />
            )}
        </section>
    );
};

export default WhatOrderIn;
