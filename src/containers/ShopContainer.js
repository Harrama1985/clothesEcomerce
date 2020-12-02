import React from 'react'
import { connect } from 'react-redux'
import Collection from '../components/Collection'
import {addItemCart} from '../redux/cart/cartActions'
import { createStructuredSelector } from 'reselect'
import {selectCollectionsArray} from '../redux/shop/shopSelectors'
function ShopContainer({addItemCart,shop_data}) {
    return (<>
       <h2 style={{marginLeft:'1rem', fontSize:'3rem',textTransform:'uppercase',textAlign:'center',marginTop:'2rem'}}>Collections</h2> 
       {shop_data.map(collection=>{
           return (<Collection key={collection.id}>
               <Collection.Title>{collection.title}</Collection.Title>
                {collection.items.filter((item,index)=>index<4).map(item=>{
                return(<Collection.Item key={item.id} AddToCart={()=>addItemCart(item)} {...item}/>)
               })} 
           </Collection>)
       })} 
    </>)
}

const mapStateToProps = createStructuredSelector(
    {
        shop_data:selectCollectionsArray
        
    }
  )
const mapDisptachToProps = (dispatch)=>{
    return {
        addItemCart: item=>dispatch(addItemCart(item)),
    }
}
export default connect(mapStateToProps,mapDisptachToProps)(ShopContainer)
