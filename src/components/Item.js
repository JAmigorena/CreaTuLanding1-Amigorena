// src/components/Item.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ id, title, price, image }) => {
    const navigate = useNavigate(); // Hook para redirigir

    const handleDetail = () => {
        navigate(`/product/${id}`); // Redirige al detalle del producto
    };

    return (
        <div className="item-card">
            <img src={image} alt={title} className="item-image" />
            <h2 className="item-title">{title}</h2>
            <p className="item-price">${price}</p>
            <button className="item-button" onClick={handleDetail}>
                Ver Detalle
            </button>
        </div>
    );
};

export default Item;
