import { useContext } from "react";
import { CartContext } from "../context/cart";


export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        //Si el contexto es UNDEFINED significa que el lugar donde estamos intentando usar el context no esta envuelto por el PROVIDER
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}
