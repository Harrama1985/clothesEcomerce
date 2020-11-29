import * as actionsType from './cartTypes'
import {addItem, removeItem, clearItem} from './cartHandler'
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
        case actionsType.REMOVE_ITEM_CART:
            return {...state,
            itemsCart:removeItem([...state.itemsCart],action.payload)
            }
        case actionsType.CLEAR_ITEM_CART:
            return {...state,
            itemsCart:clearItem([...state.itemsCart],action.payload)
            }
        default:
            return {...state}
}
}
export default cartReducer;