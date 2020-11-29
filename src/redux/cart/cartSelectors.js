import {createSelector} from 'reselect'

const selectCart = state=> state.cart

export const selectCartItem = createSelector(
    [selectCart],
    (cart)=>cart.itemsCart
    )
export const selectHidden = createSelector(
    [selectCart],
    (cart)=>cart.hidden
    )
export const selectCartItemCount = createSelector(
    [selectCartItem],
    (itemsCart)=>itemsCart.reduce((total,item)=>total+item.quantity,0)
    )
export const selectCartItemTotal = createSelector(
    [selectCartItem],
    (itemsCart)=>itemsCart.reduce((total,item)=>total+item.quantity*item.price,0)
    )

