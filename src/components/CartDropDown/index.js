import React from 'react'
import { connect } from 'react-redux'
import ButtonCustum from '../ButtonCustum'
import {Container,CartItems,EmptyCart} from './styles/CartDropDown'
import CartItem from '../CartItem'
import { withRouter } from 'react-router-dom'
import { toggelCartHidden } from '../../redux/cart/cartActions'
import { selectCartItem } from '../../redux/cart/cartSelectors'
function CartDropDown({itemsCart,history,toggelCartHidden}) {
    return (
        <Container>
            <CartItems>
                {itemsCart.length ? itemsCart.map(itemCart=><CartItem item={itemCart} key={itemCart.id}/>) 
                                    : <EmptyCart>Your cart is empty</EmptyCart>}
            </CartItems>
            <ButtonCustum onClick={()=>{
                            history.push('/checkout');
                            toggelCartHidden()
                    }}>Checkout</ButtonCustum>
        </Container>
    )
}

const mapStateToProps = (state)=>{
    return {

        itemsCart: selectCartItem(state)
    }
}

export default withRouter(connect(mapStateToProps,{toggelCartHidden})(CartDropDown))
