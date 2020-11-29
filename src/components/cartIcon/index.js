import React from 'react'
import { connect } from 'react-redux';
import { toggelCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemCount } from '../../redux/cart/cartSelectors';
import {CartContainer,IconCart,ItemCounter} from './styles/cartIcon'

function CartIcon({toggelCartHidden,itemCount}) {
    return (
        <CartContainer onClick={toggelCartHidden} >
            <IconCart/>
            <ItemCounter>{itemCount}</ItemCounter>
        </CartContainer>
    )
}
const mapStateToProps =(state)=>{
    return {
        itemCount:selectCartItemCount(state)
    }
}
export default connect(mapStateToProps,{toggelCartHidden})(CartIcon);



