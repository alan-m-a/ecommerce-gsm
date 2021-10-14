import React from 'react';
import logo from '../../images/logo.svg';
import { CartWidget } from '../CartWidget/CartWidget ';



export const Navbar = () => {
    return (
        <nav className='myNav'>
            <img src={logo} className='myLogo' alt='logo' />
            <ul>
                <a href='index.html'>Home</a>
                <a href='index.html'>Servicios</a>
                <a href='index.html'>Contacto</a>
                <a href='index.html'>Modelos Soportados</a>
                <a href='index.html'>Registro</a>
                <a href='index.html'>Login</a>
                <CartWidget />
            </ul>
        </nav>
    )
}