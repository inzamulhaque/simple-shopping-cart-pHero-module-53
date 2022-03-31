import React from 'react';
import useProducts from '../../hooks/useProducts';
import './orders.css';

const Orders = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h1>Orders: {products.length}</h1>
        </div>
    );
};

export default Orders;