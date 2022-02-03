import React from "react";
import logoCarritoImg from '../../images_header/carrito-de-compras.png'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



/* Funcion generadora del logo del carrito */
export const CartWidget = () => {
    const { cartData } = useContext(CartContext);

    let itemsNumber = 0;
    const cartItems = cartData.map((item) => (itemsNumber += item.quantity));
    return (
        <div className='containerCarrito'>
            <img src={logoCarritoImg} className='myLogoCarrito' alt='Logo de carrito de compras' />
            {itemsNumber > 0 &&
                <div className="cart-widget_items"><span>{itemsNumber}</span></div>}
        </div>
    )
}