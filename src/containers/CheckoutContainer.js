import React from 'react'
import { connect } from 'react-redux'
import CheckoutHeader from '../components/CheckoutHeader'
import CheckoutItem from '../components/CheckoutItem'
import { selectCartItem, selectCartItemTotal } from '../redux/cart/cartSelectors'
function CheckoutContainer({itemsCart,TotalPrice}) {
    return (
        <div style={{width:'60%',margin:'0 auto'}}>

        <CheckoutHeader /> 

        {itemsCart.map(item=><CheckoutItem key={item.id} item={item}/>)}
 
        <div style={{marginTop:'2rem', textAlign:'right', fontSize:'3rem'}}>TOTAL : $ {TotalPrice}</div>

        </div>

    )
}
const mapStateToProps =(state)=>{
    return {
        itemsCart:selectCartItem(state),
        TotalPrice:selectCartItemTotal(state)
    }
}
export default connect(mapStateToProps)(CheckoutContainer)
