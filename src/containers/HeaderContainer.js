import React from 'react'
import Header from '../components/header'

function HeaderContainer() {
    return (
        <Header>
            <Header.Logo/>
           <Header.NavBar>
               <Header.Item to='/shop'>Shop</Header.Item>
               <Header.Item to='/signin'>Sign In</Header.Item>
            </Header.NavBar> 
        </Header>
    )
}

export default HeaderContainer
