import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import Category from '../components/category'
import withSpinner from '../components/spinner'
import ShopContainer from '../containers/ShopContainer'
import { fetchCollection } from '../redux/shop/shopActions'
import {selectCollections, selectIsFetching} from '../redux/shop/shopSelectors'



function Shop({match,isFetching,fetchCollectionAsync,collections}) {
    useEffect(() => {
        fetchCollectionAsync() //hadi dertha fi action dial shop li katjib lia kolchi men data ofiha midelwear
    }, [])
    const ShopContainerWithSpinner = withSpinner(ShopContainer) 
    const CategoryWithSpinner = withSpinner(Category)
    return (
        <>
        <Route exact path= {`${match.path}`} render={(props)=><ShopContainerWithSpinner isLoading={isFetching} {...props}/>} />
        <Route path= {`${match.path}/:collectionId`} render={(props)=><CategoryWithSpinner isLoading={!collections} {...props}/>}  />
        </>
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
