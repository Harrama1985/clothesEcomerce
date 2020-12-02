import {createStore,applyMiddleware,compose} from 'redux';
//import logger from 'redux-logger';
import {persistStore} from 'redux-persist'

import rootReducer from './root-reducer';

//const middlewars =[]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware()))

export const persistor = persistStore(store)

export default {store,persistStore};
