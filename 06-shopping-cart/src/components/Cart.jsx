import './Cart.css'
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from '../hooks/useCart'

export function Cart() {
    const cartCheckboxId = useId()
    const { cart, clearCart } = useCart()
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className="cart">
                <ul>
                    <li>
                        <img src="https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp" alt="" />
                        <div>
                            <strong>Iphone</strong> - $1499
                        </div>

                        <footer>
                            <small>
                                Qty: 1
                            </small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}