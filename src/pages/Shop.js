import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Category from '../components/category'
import ShopContainer from '../containers/ShopContainer'

function Shop({match}) {
    return (
        <>
        <Route exact path= {`${match.path}`} component={ShopContainer} />
        <Route path= {`${match.path}/:collectionId`} component={Category} />
        </>
    )
}

export default Shop
