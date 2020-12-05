import * as actionsType from './shopType'
//import {shop_data} from './shopping-data'
const initialState = {
    collections:null,
    error:undefined,
    isFetching : false
}

const shopReducer =(state=initialState,action)=>{
    switch (action.type) {
        case actionsType.FETCH_COLLECTIONS_START:
            return {...state,
                isFetching : true
            }
        case actionsType.FETCH_COLLECTIONS_SUCCESS:
            return {...state,
                collections:action.payload,
                isFetching : false
            }
        case actionsType.FETCH_COLLECTIONS_ERROR:
            return {...state,
                error:action.payload,
                isFetching : false
            }
        default:
            return {...state}
}
}

export default shopReducer;