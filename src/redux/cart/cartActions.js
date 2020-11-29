import * as actions from './cartTypes'

export const toggelCartHidden = ()=>{
return {
    type: actions.TOGGEL_CART_HIDDEN
}
}
export const addItemCart = (item)=>{
return {
    type: actions.ADD_ITEM_CART,
    payload:item
}
}
export const removeItemCart = (item)=>{
return {
    type: actions.REMOVE_ITEM_CART,
    payload:item
}
}
export const clearItemCart = (item)=>{
return {
    type: actions.CLEAR_ITEM_CART,
    payload:item
}
}