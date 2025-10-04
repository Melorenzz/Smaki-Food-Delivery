export interface IRestaurant {
    banner: string;
    cookingTime: number;
    deliveryPrice: number;
    id: string;
    isFavorite: boolean;
    name: string;
    rating: number;
    workingHours: string;
}

export interface IProductCard {
    description: string;
    id: string;
    image: string;
    isFavorite: boolean;
    name: string;
    price: number;
    quantityInBasket: number | null;
    restaurantId: string;
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