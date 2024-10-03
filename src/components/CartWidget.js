// src/components/CartWidget.js
import React from 'react';

const CartWidget = () => {
    return (
        <div>
            <span>🛒</span> {/* Icono de carrito */}
            <span>0</span>   {/* Número de productos en el carrito */}
        </div>
    );
};

export default CartWidget;

