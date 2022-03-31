import React from 'react';
import "./ReviewItem.css";

const ReviewItem = ({ product }) => {
    const { name, price, shipping, quantity } = product;
    return (
        <div>
            ReviewItem
            <h3>{name}</h3>
        </div>
    );
};

export default ReviewItem;