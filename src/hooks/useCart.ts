import { useContext } from "react";
import { CartContext } from "../context/Cart";

export function useCart() {
    const context = useContext(CartContext)
    return context;
}