import MainLayout from "../layouts/MainLayout.tsx";
import { ChevronLeftIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import RestaurantPreview from "../components/RestaurantPreview.tsx";
import { useGetRestaurants } from "../hooks/useGetRestaurants.ts";
import { useNavigate } from "react-router";
import type { IRestaurant } from "../types/types.ts";
import { useState, useMemo } from "react";

const RestaurantsPage = () => {
    const { data: restaurants } = useGetRestaurants();
    const navigate = useNavigate();

    const [sortOrder, setSortOrder] = useState<
        "default" | "rating-desc" | "rating-asc" | "price-asc" | "price-desc" | "newest" | "oldest"
    >("default");
    const [open, setOpen] = useState(false);

    const options: { value: typeof sortOrder; label: string }[] = [
        { value: "default", label: "Без сортировки" },
        { value: "rating-desc", label: "По рейтингу (высокий → низкий)" },
        { value: "rating-asc", label: "По рейтингу (низкий → высокий)" },
    ];

    const selectedLabel = options.find((opt) => opt.value === sortOrder)?.label;

    const sortedRestaurants = useMemo(() => {
        const items = [...(restaurants?.restaurants ?? [])];
        switch (sortOrder) {
            case "rating-desc":
                return items.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
            case "rating-asc":
                return items.sort((a, b) => (a.rating ?? 0) - (b.rating ?? 0));
            default:
                return items;
        }
    }, [restaurants, sortOrder]);


    return (
        <MainLayout>
            <div className="mt-[88px]">
                <div className="flex gap-[10px] items-center">
                    <button onClick={() => navigate(-1)} className="w-[44px] aspect-square bg-white-col rounded-[14px]">
                        <ChevronLeftIcon className="w-full" />
                    </button>
                    <h1 className="text-[32px] font-bold my-[40px]">Заклади</h1>
                </div>

                <div className="relative flex mb-6">
                    <div
                        className="relative w-[260px] bg-white-col backdrop-blur-md border border-border-col rounded-2xl px-4 py-2 flex items-center justify-between cursor-pointer transition-all hover:border-gray-400"
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
                        <div className="absolute top-[110%] left-0 w-[260px] bg-white-col backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg overflow-hidden animate-fadeIn z-10">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px]">
                    {sortedRestaurants.map((restaurant: IRestaurant) => (
                        <RestaurantPreview key={restaurant.id} restaurant={restaurant} />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default RestaurantsPage;
