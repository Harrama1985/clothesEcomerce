import {combineReducers} from 'redux'
import cartReducer from './cart/cartReducers'
import directoryReducer from './directory/directoryReducers'
import userReducer from './user/userReducer'

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shopReducer from './shop/shopReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
  };
  
  const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop:shopReducer,
  });
  
  export default persistReducer(persistConfig, rootReducer);



