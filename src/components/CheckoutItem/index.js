import React from 'react'
import { connect } from 'react-redux'
import { addItemCart, clearItemCart, removeItemCart } from '../../redux/cart/cartActions'
import { Container,Image,Text,Remove,Quantity} from './styles/CheckoutItem'
function CheckoutItem({item,removeItem,clearItem,addItem}) {
    const {imageUrl,name,quantity,price} = item
    return (
        <Container>
            <Image><img src={imageUrl} alt='item'/></Image>
            <Text>{name}</Text>
            <Quantity>
                <div onClick={()=>removeItem(item)}>&#8918;</div>
                <span>{quantity}</span>
                <div onClick={()=>addItem(item)}>&#8919;</div>
            </Quantity>
            <Text>{price}</Text>
            <Remove onClick={()=>clearItem(item)}>&#9932;</Remove>
        </Container>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem:item=>dispatch(removeItemCart(item)),
        addItem:item=>dispatch(addItemCart(item)),
        clearItem:item=>dispatch(clearItemCart(item))
    }
}
export default connect(null,mapDispatchToProps)(CheckoutItem)
