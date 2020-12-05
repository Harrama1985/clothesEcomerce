
import * as actions from './shopType'
import {convertCollectionSnapchatToMap,firestore} from '../../firebase/firebase'

export const fetchCollectionStart = ()=>{
    return {
        type: actions.FETCH_COLLECTIONS_START,
    }
}
export const fetchCollectionSuccess = (collection)=>{
    return {
        type: actions.FETCH_COLLECTIONS_SUCCESS,
        payload:collection
    }
}

export const fetchCollectionError = (error)=>{
    return {
        type: actions.FETCH_COLLECTIONS_ERROR,
        payload:error
    }
}
//hadi middelwear dertha bach hta djib data 3ad t3addel 3la initialstate hit ila madernach lmmidelwear katekhdem initialstate gbel misali lfetch okirejje3 lia null hit baki baki data majatch asslan 
//walakin m3a lmidelwear darori initialstate katssena hta kikmel lmeddelwear 3ad kate3mer initial state
export const fetchCollection =()=>{
    return dispatch=>{
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionStart())
        collectionRef.get().then(snap=>{
            const collectionMap = convertCollectionSnapchatToMap(snap);
            dispatch(fetchCollectionSuccess(collectionMap));
        }).catch(err=>dispatch(fetchCollectionError(err)))
    }
}


