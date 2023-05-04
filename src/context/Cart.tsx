import { ReactNode, createContext, useEffect, useState } from 'react'
import { produce } from 'immer'

export interface CartItem {
    quantity: number;
    id: number;
    name: string;
    price: number,
    coffeesString?: string;
}

interface CartContextType {
    cartItems: CartItem[];
    cartQuantity: number;
    cartItemsTotal: number;
    addCoffeeToCart: (coffee: CartItem) => void;
    changeCartItemQuantity: (cartItemId: number, type: 'increase' | 'decrease') => void;
    removeCartItem: (cartItem: number) => void;
}

interface CartContextProviderProps {
    children: ReactNode;
}

interface CartStorage {
    coffeesString: string;
    coffeesObj: Object;
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const COFFE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems';

    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = localStorage.getItem(COFFE_ITEMS_STORAGE_KEY)
        if(storedCartItems) {
            return JSON.parse(storedCartItems)
        }
        return []
    });

    const cartQuantity = cartItems.length

    const cartItemsTotal = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity
    }, 0)

    function addCoffeeToCart(coffee: CartItem) {
        const coffeeAlreadyExistsInCart = cartItems.findIndex(
            (cartItem) => cartItem.id === coffee.id
        );

        const newCart = produce(cartItems, (draft) => {
            if(coffeeAlreadyExistsInCart < 0) { //findIndex retorna -1
                draft.push(coffee);            
            } else {
            draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
            }
        })
        setCartItems(newCart)

    }
    
    function changeCartItemQuantity(cartItemId: number, type: 'increase' | 'decrease') {
        const newCart = produce(cartItems, (draft) => {
            const coffeeExistsInCart = cartItems.findIndex(
                cartItem  => cartItem.id === cartItemId
            );

            if(coffeeExistsInCart >= 0) {
                const item = draft[coffeeExistsInCart];
                draft[coffeeExistsInCart].quantity = type==='increase' ? item.quantity + 1 : item.quantity - 1;
            }
        });
        setCartItems(newCart)
    }

    function removeCartItem(cartItemId: number) {
        const newCart = produce(cartItems, (draft) => {
            const coffeeExistsInCart = cartItems.findIndex(
                cartItem  => cartItem.id === cartItemId
            );

            if(coffeeExistsInCart >= 0) {
                draft.splice(coffeeExistsInCart, 1)
            }
        });
        setCartItems(newCart)
    }

    useEffect(() => {
        localStorage.setItem(COFFE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <CartContext.Provider value={{cartItems, cartQuantity, addCoffeeToCart, changeCartItemQuantity, removeCartItem, cartItemsTotal}}>
            {children}
        </CartContext.Provider>
    )
}
