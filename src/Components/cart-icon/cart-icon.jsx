import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { SelectCartItemsCount, selectCartHidden } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

class CartIcon extends React.Component{
  render(){
    
    const { toggleCartHidden, hidden, itemCount} = this.props;
    const showDropdown = () =>{
        if (hidden){toggleCartHidden()}
      }

    return(
      <div className='cart-icon' onClick={showDropdown}>
        <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{itemCount}</span>
      </div>
    )
  }} 

  const mapStateToProps = createStructuredSelector ({
    hidden: selectCartHidden,
    itemCount: SelectCartItemsCount
  })

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);