export interface IRestaurant {
    banner: string;
    cookingTime: number;
    deliveryPrice: number;
    id: string;
    isFavorite: boolean;
    name: string;
    rating: number;
    workingHours: string;
    logo?: string;
}

export interface IProductCard {
    description: string;
    id: string;
    image: string;
    isFavorite?: boolean;
    name: string;
    price: number;
    quantityInBasket?: number | null;
    restaurantId?: string;
    weight: number;
}

interface address {

}
export interface IUser {
    id: string;
    phone: string;
    role: 'USER' | 'ADMIN';
    userProfile: {
        firstName: string;
        lastName: string;
        addresses: address[];
    }
}

export interface ProfileNavigationType {
    page: string;
    icon: string;
    name: string;
    link: string;
}

export interface Category {
    id: string;
    name: string;
    imageUrl: string;
}

export interface StoreState {
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
    accessToken: string | null;
    setAccessToken: (token: string) => void;
    logout: () => void;

    user: IUser | null;
    setUser: (data: IUser | null) => void;

    theme: 'light' | 'dark';
    toggleTheme: () => void;
    setTheme: (theme: 'light' | 'dark') => void;

    cart: IProductCard[];
    setCart: (newItem: IProductCard) => void;

    addQuantity: (productId: string) => void;
    removeQuantity: (productId: string) => void;

    isOpenAuthModal: boolean;
    setIsOpenAuthModal: (isOpenAuthModal: boolean) => void;

    isOpenCart: boolean;
    setIsOpenCart: (isOpenCart: boolean) => void;

}

