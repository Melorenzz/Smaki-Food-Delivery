import {create} from "zustand/react";
import type {IUser, StoreState} from "./types/types.ts";

const initialTheme = (localStorage.getItem("theme")) || "light";
document.documentElement.setAttribute("theme", initialTheme);



export const store = create<StoreState>((set, get) => ({
    isAuthenticated: false,
    setIsAuthenticated: (isAuthenticated) => set({isAuthenticated: isAuthenticated}),
    accessToken: null,
    setAccessToken: (token: string) => set({accessToken: token, isAuthenticated: !!token}),
    logout: () => {
        set({isAuthenticated: false, accessToken: null});
        localStorage.removeItem('tokens');
    },

    user: null,
    setUser: (data: IUser | null) => set({user: data}),

    theme: (localStorage.getItem("theme") as "light" | "dark") || "light",
    toggleTheme: () => {
        const newTheme = get().theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("theme", newTheme);
        set({theme: newTheme});
    },
    setTheme: (t: "light" | "dark") => {
        localStorage.setItem("theme", t);
        document.documentElement.setAttribute("theme", t);
        set({theme: t});
    },
    cart: JSON.parse(localStorage.getItem('cart') || '[]'),
    setCart: (newItem) => {
        set((state): Partial<StoreState> => {
            const updatedCart = [...state.cart, newItem];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return {cart: updatedCart};
        })
    },
    addQuantity: (productId: string) => {
        set((state) => {
            const updatedCart = state.cart.map((item) =>
                item.id === productId
                    ? {...item, quantityInBasket: (item?.quantityInBasket ?? 0) + 1}
                    : item
            );

            localStorage.setItem("cart", JSON.stringify(updatedCart));

            return {cart: updatedCart};
        });
    },
    removeQuantity: (productId: string) => {
        set((state) => {
            const updatedCart = state.cart.map(item => {
                    if(item.id === productId) {
                            return {...item, quantityInBasket: (item.quantityInBasket ?? 0) - 1 }
                    }else{
                        return item;
                    }
                }
            ).filter(item => (item.quantityInBasket ?? 0) > 0);

            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return {cart: updatedCart};
        })
    },

    isOpenAuthModal: false,
    setIsOpenAuthModal: (isOpen: boolean) => {
        set({isOpenAuthModal: isOpen})
    },

    isOpenCart: false,
    setIsOpenCart: (isOpen: boolean) => {
        set({isOpenCart: isOpen})
    },
}))