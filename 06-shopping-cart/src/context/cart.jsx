import { createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cart";

export const CartContext = createContext()

export function CartProvider({ children }) {
    //const [cart, setCart] = useState([])
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({ type: 'CLEAR_CART' })

    /* const addToCart = product => {
        //setCart([...cart, product]) //Forma Básica

        const productInCartIndex = cart.findIndex(item => item.id === product.id)


        //El producto no esta en el carrito
        setCart(prevState => ([
            ...prevState, {
                ...product, quantity: 1
            }
        ]))

    }

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    const clearCart = () => {
        setCart([])
    } */

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )

}