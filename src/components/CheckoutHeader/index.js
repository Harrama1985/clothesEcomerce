import React from 'react'
import {Container,Header,Title} from './styles/CheckoutHeader'
function CheckoutHeader() {
    return (
        <Container>
            <Header>
                <Title>products</Title>
                <Title>description</Title>
                <Title>quantity</Title>
                <Title>price</Title>
                <Title>remove</Title>
            </Header>
        </Container>
    )
}

export default CheckoutHeader