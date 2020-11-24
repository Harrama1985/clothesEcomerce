import React from 'react'
import Collection from '../components/Collection'
import {SHOP_DATA} from '../shopping-data' 

function ShopContainer() {
    return (<>
       <h2 style={{marginLeft:'1rem', fontSize:'3rem',textTransform:'uppercase',textAlign:'center',marginTop:'2rem'}}>Collections</h2> 
       {SHOP_DATA.map(collection=>{
           return (<Collection key={collection.id}>
               <Collection.Title>{collection.title}</Collection.Title>
                {collection.items.filter((item,index)=>index<4).map(item=>{
                    return(<Collection.Item key={item.id} {...item}/>)
               })} 
           </Collection>)
       })} 
    </>)
}

export default ShopContainer
