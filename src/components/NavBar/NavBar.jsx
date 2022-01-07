import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget ';
import { NavLink } from 'react-router-dom';


/*CartWidget genera el logo*/

export const NavBar = () => {
    return (

        <Navbar collapseOnSelect expand='sm'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='myNav'>
                        <NavLink to={'/'} style={{fontSize:'30px'}}>GSM™</NavLink>
                        <NavLink to={'/'}>Servicios</NavLink>
                        <NavLink to={'/category/motorola'}>Motorola</NavLink>
                        <NavLink to={'/category/iphone'}>Iphone</NavLink>
                        <NavLink to={'/category/xiaomi'}>Xiaomi</NavLink>
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}