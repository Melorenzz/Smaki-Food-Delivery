import {HeartIcon} from "@heroicons/react/24/outline";
import {store} from "../store.ts";
import type {FormEvent} from "react";

interface IFavoriteButtonProps {
    favoriteAction: (e?: FormEvent) => void;
    isInFavorite: boolean;
}

const FavoriteButton = ({favoriteAction, isInFavorite}: IFavoriteButtonProps) => {

    const isAuthenticated = store(state => state.isAuthenticated);

    return (
        <button onClick={favoriteAction}  className={` ${isInFavorite ? 'bg-red-col text-white' : 'bg-white-col/50'} ${isAuthenticated ? 'inline' : 'hidden'} absolute p-[7px] scale-100 hover:scale-110 transition rounded-xl backdrop-blur-xl top-5 shadow left-5 z-1`}>
            <HeartIcon className='w-[24px]' />
        </button>
    );
};

export default FavoriteButton;