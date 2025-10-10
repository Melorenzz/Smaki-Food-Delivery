import H2 from "./H2.tsx";
import CategoryCard from "./CategoryCard.tsx";
import {useGetTopCategories} from "../../hooks/useGetTopCategories.ts";
import {useEffect} from "react";
import ShowMoreButton from "../ShowMoreButton.tsx";
import {useNavigate} from "react-router";
import type {Category} from "../../types/types.ts";

const PopularCategories = () => {

    const { data: categories } = useGetTopCategories()

    useEffect(() => {
        console.log(categories)
    }, [categories]);

    const navigate = useNavigate()

    return (
        <section className='flex flex-col mt-[20px]'>
            <H2>Популярні категорії</H2>
            <div className='flex flex-wrap mb-[20px] mt-[50px] justify-center gap-[20px]'>
                {categories?.map((category: Category) => (
                    <CategoryCard key={category.id} name={category.name} id={category.id} icon={category.imageUrl} />
                ))}
            </div>
            <ShowMoreButton isFetchingNextPage={false} fetchNextPage={() => navigate('/restaurants')} />
        </section>
    );
};

export default PopularCategories;