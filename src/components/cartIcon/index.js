import React from 'react'
import { connect } from 'react-redux';
import { toggelCartHidden } from '../../redux/cart/cartActions';
import {CartContainer,IconCart,ItemCounter} from './styles/cartIcon'

function CartIcon({toggelCartHidden,...restProps}) {
    return (
        <CartContainer onClick={toggelCartHidden} {...restProps} >
            <IconCart/>
            <ItemCounter {...restProps}>0</ItemCounter>
        </CartContainer>
    )
}

export default connect(null,{toggelCartHidden})(CartIcon);



