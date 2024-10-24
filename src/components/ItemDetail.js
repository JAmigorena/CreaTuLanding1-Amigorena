import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ title, price, description, image }) => {
    return (
        <div className="item-detail-container">
            <img src={image} alt={title} className="item-image" />
            <h2 className="item-detail-title">{title}</h2>
            <p className="item-detail-price">${price}</p>
            <p className="item-detail-description">{description}</p>
            <button className="add-to-cart-button">Agregar al Carrito</button>
        </div>
    );
};

export default ItemDetail;