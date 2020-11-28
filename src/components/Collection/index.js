import React from 'react'

import {Container,BgImg,Name,Price,Content,Title,Item,AddButton} from './styles/collection'
export default function Collection({children,...restProps}) {
    return (
    <Container {...restProps}>{children}</Container>
    )
}

Collection.Title = function CollectionTitle({children,...restProps}){
return <Title{...restProps}>{children}</Title>
}

Collection.Item = function CollectionItem({imageUrl,price,name,AddToCart,...restProps}){
return <Item{...restProps}>
    <BgImg imageUrl={imageUrl}/>
    <Content>
      <Name>{name}</Name>
    <Price>{price}</Price>
    </Content>
    <AddButton inverted onClick={AddToCart}>Add to cart</AddButton>
</Item>
}



