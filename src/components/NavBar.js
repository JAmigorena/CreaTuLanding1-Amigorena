// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css'; 

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Artesanías de Mamá</h1>
            <ul className="navbar-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/category/mates">Mates Pintados</Link></li>
                <li><Link to="/category/cuencos">Cuencos Pintados</Link></li>
                <li><Link to="/category/posavasos">Posa Tazas Tejidos</Link></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;