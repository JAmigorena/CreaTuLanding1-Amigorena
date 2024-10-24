// src/containers/ItemDetailContainer.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { productId } = useParams(); // Extrae el ID de la URL

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Detalle del Producto</h1>
            <p>Producto ID: {productId}</p>
            <p>descripción del producto.</p>
        </div>
    );
};

export default ItemDetailContainer;