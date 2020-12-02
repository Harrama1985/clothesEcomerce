import React from 'react'
import { connect } from 'react-redux'
import { addItemCart } from '../../redux/cart/cartActions';
import { selectCategory } from '../../redux/shop/shopSelectors'
import Collection from '../Collection';
import {Container} from './styles/category';

function Category({category,addItemCart}) {
    return (
        <Container>
           <Collection.Title>{category.title}</Collection.Title> 
            {category.items.map(item=>{
                return(<Collection.Item key={item.id} AddToCart={()=>addItemCart(item)} {...item}/>)
            })} 
        </Container>
    )
}

const mapStateToProps = (state, ownProps)=>{
    return{ 
       category:selectCategory(ownProps.match.params.collectionId)(state)
}}

const mapDisptachToProps = (dispatch)=>{
    return {
        addItemCart: item=>dispatch(addItemCart(item)),
    }
}

export default connect(mapStateToProps,mapDisptachToProps)(Category)