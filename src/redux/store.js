import {createStore,applyMiddleware,compose} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//const middlewars =[]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger)))



export default store;