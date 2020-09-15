import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

class CartIcon extends React.Component{
  render(){
    
    const { toggleCartHidden, hidden} = this.props;
    const showDropdown = () =>{
        if (hidden){toggleCartHidden()}
      }

    return(
      <div className='cart-icon' onClick={showDropdown}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
      </div>
    )
  }} 

  const mapStateToProps = ({cart: { hidden }}) => ({
    hidden
  })

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);