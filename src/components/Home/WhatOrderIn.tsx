import {useGetProductsFromRestaurantQuery} from "../../hooks/useGetProductsFromRestaurantQuery.ts";
import {useEffect, useState} from "react";
import ProductCard from "./ProductCard.tsx";
import type {IProductCard} from "../../types/types.ts";

const WhatOrderIn = () => {
    const {data: products} = useGetProductsFromRestaurantQuery('27d6a336-5011-4408-8c20-015a3d8801cd')

    useEffect(() => {
        console.log(products)
    }, [products]);

    return (
        <section className='mt-[60px] flex flex-col'>
            <h2 className='text-[32px] font-extrabold'>Що замовити у Eats Easy</h2>
            <div className='grid grid-cols-3 gap-[20px] mt-[26px]'>
                {products?.products.map((product: IProductCard) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
            <button className='max-w-[427px] w-full p-[12px] bg-white-col border-2 border-border-col rounded-full mx-auto mt-[26px] font-semibold text-[15px]'>Показати ще</button>
        </section>
    );
};

export default WhatOrderIn;