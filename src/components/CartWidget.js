// src/components/CartWidget.js
import React from 'react';
import './CartWidget.css'; // Asegúrate de importar los estilos

const CartWidget = () => {
    const cartQuantity = 3; // Prueba con un número mayor a 0 para ver el contador

    return (
        <div className="cart-widget">
            <span className="material-icons cart-icon">shopping_cart</span>
            {cartQuantity > 0 && (
                <span className="cart-quantity">{cartQuantity}</span>
            )}
        </div>
    );
};

export default CartWidget;

