
const SkeletonRestaurantPreview = () => {
    return (
        <div className="shrink-0 max-w-[424px] w-full h-[334px] grid grid-rows-3 rounded-[32px] overflow-hidden mb-[40px] shadow bg-white animate-pulse">
            {/* Верхняя часть (баннер) */}
            <div className="relative max-w-[424px] h-full row-span-2 rounded-b-[32px] overflow-hidden bg-gray-200 flex justify-center items-center">
                {/* Иконка рейтинга */}
                <div className="absolute bottom-[20px] right-[20px] bg-gray-300 rounded-full py-[5px] px-[10px] w-[60px] h-[24px]" />
            </div>

            {/* Нижняя часть (информация) */}
            <div className="px-[18px] py-[10px] flex flex-col justify-between">
                {/* Название */}
                <div className="h-[24px] w-3/4 bg-gray-300 rounded mb-[6px]" />

                {/* Доставка и время */}
                <div className="flex gap-[8px] items-center">
                    <div className="flex items-center gap-[3px] bg-gray-300 w-[80px] h-[24px] rounded-full" />
                    <div className="h-[20px] w-[40px] bg-gray-300 rounded" />
                </div>
            </div>
        </div>
    );
};

export default SkeletonRestaurantPreview;