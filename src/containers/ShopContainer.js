import React from 'react'
import { connect } from 'react-redux'
import Collection from '../components/Collection'
import {SHOP_DATA} from '../shopping-data' 
import {addItemCart} from '../redux/cart/cartActions'
function ShopContainer(props) {
    return (<>
       <h2 style={{marginLeft:'1rem', fontSize:'3rem',textTransform:'uppercase',textAlign:'center',marginTop:'2rem'}}>Collections</h2> 
       {SHOP_DATA.map(collection=>{
           return (<Collection key={collection.id}>
               <Collection.Title>{collection.title}</Collection.Title>
                {collection.items.filter((item,index)=>index<4).map(item=>{
                    return(<Collection.Item key={item.id} AddToCart={()=>props.addItemCart(item)} {...item}/>)
               })} 
           </Collection>)
       })} 
    </>)
}
const mapDisptachToProps = (dispatch)=>{
    return {
        addItemCart: item=>dispatch(addItemCart(item)),
    }
}
export default connect(null,mapDisptachToProps)(ShopContainer)
