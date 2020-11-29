export const addItem=(listItems,itemToAdd)=>{
    const filterItem = listItems.find(item=>item.id===itemToAdd.id)
    if(filterItem){
        return listItems.map(item=> item.id === itemToAdd.id ? {...item,quantity:item.quantity+1} : item)
    }    
    return [...listItems,{...itemToAdd,quantity:1}]
}

export const clearItem = (listItems , itemToClean)=>{
    return listItems.filter(item=>item.id!==itemToClean.id)
}

export const removeItem =(listItems , itemToRemove)=>{
    if(itemToRemove.quantity <= 1){
        return listItems.filter(item=>item.id!==itemToRemove.id)
    }
    return listItems.map(item=> item.id === itemToRemove.id ? {...item,quantity:item.quantity-1} : item)
}