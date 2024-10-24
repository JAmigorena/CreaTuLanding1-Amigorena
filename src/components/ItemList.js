// src/components/ItemList.js
import React from 'react';
import Item from './Item';
import './ItemList.css';

const items = [
    {
        id: 1,
        title: 'Mate Pintado a Mano',
        price: 1500,
        image: 'https://via.placeholder.com/300x200?text=Mate',
    },
    {
        id: 2,
        title: 'Cuenco Decorativo',
        price: 1200,
        image: 'https://via.placeholder.com/300x200?text=Cuenco',
    },
    {
        id: 3,
        title: 'Posa Taza Tejido',
        price: 800,
        image: 'https://via.placeholder.com/300x200?text=Posa+Taza',
    },
];

const ItemList = () => {
    return (
        <div className="item-list">
            {items.map((item) => (
                <Item 
                    key={item.id} 
                    id={item.id} 
                    title={item.title} 
                    price={item.price} 
                    image={item.image} 
                />
            ))}
        </div>
    );
};

export default ItemList;
