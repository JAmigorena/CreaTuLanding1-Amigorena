// src/containers/ItemListContainer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';

const productos = [
    { id: 1, name: "Mate Pintado", category: "mates" },
    { id: 2, name: "Cuenco Pintado", category: "cuencos" },
    { id: 3, name: "Posa Tazas Tejido", category: "posavasos" },
];

    const ItemListContainer = () => {
        const { categoryId } = useParams();
        const [items, setItems] = useState([]);

        useEffect(() => {
            const getProductos = new Promise((resolve) => {
                setTimeout(() => {
                    const productosFiltrados = categoryId
                        ? productos.filter((prod) => prod.category === categoryId)
                        : productos;
                    resolve(productosFiltrados);
                }, 2000);
            });

            getProductos.then((res) => setItems(res));
        }, [categoryId]);

        return <ItemList items={items} />;
};

export default ItemListContainer;

