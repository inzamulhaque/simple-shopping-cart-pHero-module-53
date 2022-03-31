import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './orders.css';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} />)
                }
            </div>
            <div className="cartContainer">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Orders;