import React from "react";
import './item-card.scss'
import CustomButton from "../custom-button/custom-button";
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

const ItemCard = ({ item, addItem }) => {
    const { name, price, imageUrl } = item
    return(
       <div className='item-card'>
        <div 
            className='image' 
            style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
        <CustomButton 
            onClick={() => addItem(item)} 
            inverted
        >
                ADD TO CART
        </CustomButton>
    </div> 
    ) 
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ItemCard);