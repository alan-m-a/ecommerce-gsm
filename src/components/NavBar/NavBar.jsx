import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { CartWidget } from '../CartWidget/CartWidget ';


/*Componente Navbar renderiza + links de acceso*/ 
/*CartWidget genera el logo*/

export const Navbar = () => {
    return (
        <nav className='myNav'>
            <Link to='/'><img src={logo} className='myLogo' alt='logo' /></Link>
            <ul>
                <Link to='servicios'>Servicios</Link>
                <a href='#.html'>Contacto</a>
                <a href='#.html'>Modelos Soportados</a>
                <a href='#.html'>Registro</a>
                <a href='#.html'>Login</a>
                <CartWidget />
            </ul>
        </nav>
    )
}