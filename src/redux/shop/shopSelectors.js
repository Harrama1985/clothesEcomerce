//import { HashRouter } from 'react-router-dom'
import {createSelector} from 'reselect'
//import { shop_data } from './shopping-data'

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    (shop)=> shop.collections
)

export const selectIsFetching = createSelector(
    [selectShop],
    (shop)=> shop.isFetching
)

export const selectCollectionsArray = createSelector(
    [selectCollections],
    (collections)=> collections ? Object.keys(collections).map(key=>collections[key] ) 
    : []// hawelt shop_data 3la chkel array 
)

export const selectCategory = categoryId => createSelector(
    [selectCollections],
    (collections)=> collections ? collections[categoryId] : null
)
