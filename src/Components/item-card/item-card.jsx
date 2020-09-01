import React from "react";
import './item-card.scss'

const ItemCard = ({ id, name, price, imageUrl }) => (
    <div className='item-card'>
        <div 
            className='image' 
            style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>

    </div>
)

export default ItemCard;