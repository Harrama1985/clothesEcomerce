import React from 'react'
import { connect } from 'react-redux'
import ButtonCustum from '../ButtonCustum'
import {Container,CartItems} from './styles/CartDropDown'
import CartItem from '../CartItem'
function CartDropDown({itemsCart}) {
    return (
        <Container>
            <CartItems>
                {itemsCart.map(itemCart=><CartItem item={itemCart} key={itemCart.id}/>)}
            </CartItems>
            <ButtonCustum>Checkout</ButtonCustum>
        </Container>
    )
}

const mapStateToProps = (state)=>{
    return {
        itemsCart: state.cart.itemsCart
    }
}

export default connect(mapStateToProps)(CartDropDown)
