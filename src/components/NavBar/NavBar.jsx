import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images_header/logo.svg';
import { CartWidget } from '../CartWidget/CartWidget ';
import { NavLink } from 'react-router-dom';


/*Componente Navbar renderiza + links de acceso*/
/*CartWidget genera el logo*/

export const Navbar = () => {
    return (
        <nav className='myNav'>
            <Link to='/'><img src={logo} className='myLogo' alt='logo' /></Link>
            <ul>
                <Link to='servicios'>Servicios</Link>
                <NavLink to={'/category/motorola'}>Motorola</NavLink>
                <NavLink to={'/category/iphone'}>Iphone</NavLink>
                <NavLink to={'/category/xiaomi'}>Xiaomi</NavLink>
                <CartWidget />
            </ul>
        </nav>
    )
}

/*
 <a href='#.html'>Contacto</a>
<a href='#.html'>Modelos Soportados</a>
<a href='#.html'>Registro</a>
<a href='#.html'>Login</a>*/