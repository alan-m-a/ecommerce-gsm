import React from "react";
import logoCarritoImg from '../../images_header/carrito-de-compras.png'



/* Funcion generadora del logo del carrito */
export const CartWidget = () => {
    return (
        <div className='containerCarrito'>
            <img src={logoCarritoImg} className='myLogoCarrito' alt='Logo de carrito de compras' />
            <div className="cart-widget_items"><span>0</span></div>
        </div>
    )
}