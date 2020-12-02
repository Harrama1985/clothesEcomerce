import { HashRouter } from 'react-router-dom'
import {createSelector} from 'reselect'
import { shop_data } from './shopping-data'

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    (shop)=> shop.shop_data
)

export const selectCollectionsArray = createSelector(
    [selectCollections],
    (shop_data)=> Object.keys(shop_data).map(key=>shop_data[key]) // hawelt shop_data 3la chkel array 
)

export const selectCategory = categoryId => createSelector(
    [selectCollections],
    (shop_data)=> shop_data[categoryId]
)
