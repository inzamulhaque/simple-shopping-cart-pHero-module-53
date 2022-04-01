import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './orders.css';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="reviewItemsContainer">
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveProduct={handleRemoveProduct} />)
                }
            </div>
            <div className="cartContainer">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Orders;