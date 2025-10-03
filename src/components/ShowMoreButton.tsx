type ShowMoreButtonProps = {
    fetchNextPage: () => void;
    isFetchingNextPage: boolean;

}

const ShowMoreButton = ({fetchNextPage, isFetchingNextPage}: ShowMoreButtonProps) => {
    return (
        <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="max-w-[427px]  w-full p-[12px] bg-white-col border-2 border-border-col rounded-full mx-auto font-semibold text-[15px]"
        >
            {isFetchingNextPage ? "Завантаження..." : "Показати ще"}
        </button>
    );
};

export default ShowMoreButton;