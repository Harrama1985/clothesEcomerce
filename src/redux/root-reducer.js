import {combineReducers} from 'redux'

import cartReducer from './cart/cartReducers'

import userReducer from './user/userReducer'


export default combineReducers({
    user:userReducer,
    cart: cartReducer
})

