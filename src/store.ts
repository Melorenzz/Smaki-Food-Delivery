import {create} from "zustand/react";
import type {IUser} from "./types/types.ts";

const initialTheme = (localStorage.getItem("theme")) || "light";
document.documentElement.setAttribute("theme", initialTheme);
export const store = create((set, get) => ({
    isAuthenticated: false,
    accessToken: null,
    setAccessToken: (token: string) => set({accessToken: token, isAuthenticated: !!token}),
    logout: () => {
        set({isAuthenticated: false, setAccessToken: null});
        localStorage.removeItem('tokens');
    },

    user: null,
    setUser: (data: IUser) => set({user: data}),

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
        set((state) => {
            const updatedCart = [...state.cart, newItem];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return {cart: updatedCart};
        })
    },
    addQuantity: (productId: string) => {
        set((state) => {
            const updatedCart = state.cart.map((item) =>
                item.id === productId
                    ? {...item, quantity: item.quantity + 1, price: ( item.price / item.quantity ) * ( item.quantity + 1 )}
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
                            return {...item, quantity: item.quantity - 1, price: item.price - (item.price/item.quantity) }
                    }else{
                        return item;
                    }
                }
            ).filter(item => item.quantity > 0);

            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return {cart: updatedCart};
        })
    }
}))