import React from "react";
import logoCarritoImg from '../../images/carrito-de-compras.png'

/* Funcion generadora del logo del carrito */
export const CartWidget = () => {
    return (
        <div className='containerCarrito'>
            <img src={logoCarritoImg} className='myLogoCarrito' alt='Logo de carrito de compras'/>
        </div>
    )
}