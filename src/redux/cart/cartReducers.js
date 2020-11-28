import * as actionsType from './cartTypes'
import {addItem} from './cartHandler'
const initialState ={
    hidden:true,
    itemsCart:[]
}

const cartReducer =(state=initialState,action)=>{
    switch (action.type) {
        case actionsType.TOGGEL_CART_HIDDEN:
            return {...state,
            hidden:!state.hidden
            }
        case actionsType.ADD_ITEM_CART:
            return {...state,
            itemsCart:addItem([...state.itemsCart],action.payload)
            }
        default:
            return {...state}
}
}
export default cartReducer;