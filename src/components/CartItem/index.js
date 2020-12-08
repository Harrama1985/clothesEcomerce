import React from 'react'
import {Container,Image,Content,Span} from './styles/CartItem'
function CartItem({item:{imageUrl,name,quantity,price}}) {
    return (
        <Container>
            <Image src={imageUrl}/>
            <Content>
                <Span>{name}</Span>
                <Span>{quantity} X {price}</Span>
            </Content>
        </Container>
    )
}

export default React.memo(CartItem) 

