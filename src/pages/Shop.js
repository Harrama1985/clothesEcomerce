import React, { lazy, Suspense, useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import withSpinner from '../components/spinner'
import Spinner from '../components/spinner/Spinner'

import { fetchCollection } from '../redux/shop/shopActions'
import {selectCollections, selectIsFetching} from '../redux/shop/shopSelectors'

const ShopContainer = lazy(()=>import('../containers/ShopContainer'))
const Category = lazy(()=>import('../components/category'))


function Shop({match,isFetching,fetchCollectionAsync,collections}) {
    useEffect(() => {
        fetchCollectionAsync() //hadi dertha fi action dial shop li katjib lia kolchi men data ofiha midelwear
    }, [fetchCollectionAsync])
    const ShopContainerWithSpinner = withSpinner(ShopContainer) 
    const CategoryWithSpinner = withSpinner(Category)
    //fi router dial CategoryWithSpinner lifi star 23 makne3tihch isFetching walakin kane3tih collections
    //hna kangollih wach kina collections kina fi state ola la ila kanet kayna radi ijib lia component ila kanet makinach radi ikhdem spinner
    return(
        <Suspense fallback={<Spinner/>}>
        <Route exact path= {`${match.path}`} render={(props)=><ShopContainerWithSpinner isLoading={isFetching} {...props}/>} />
        <Route path= {`${match.path}/:collectionId`} render={(props)=><CategoryWithSpinner isLoading={!collections} {...props}/>}  />
        </Suspense>
    )
}

const mapDispatchToProps= (dispatch)=>{
    return {
        fetchCollectionAsync:()=>dispatch(fetchCollection())
    }
}
const mapStateToProps = createStructuredSelector({
    isFetching : selectIsFetching,
    collections: selectCollections
})
export default connect(mapStateToProps,mapDispatchToProps)(Shop)
