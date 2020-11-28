export const addItem=(listItems,itemToAdd)=>{
    const filterItem = listItems.find(item=>item.id===itemToAdd.id)
    if(filterItem){
        return listItems.map(item=> item.id === itemToAdd.id ? {...item,quantity:item.quantity+1} : item)
    }    
    return [...listItems,{...itemToAdd,quantity:1}]
}