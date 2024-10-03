// src/components/NavBar.js
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav>
            <h1>Mi Tienda</h1>
            <ul>
                <li>Home</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
            {/* Aquí se renderiza el CartWidget */}
            <CartWidget />
        </nav>
    );
};

export default NavBar;
