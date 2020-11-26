import React from 'react'
import Header from '../components/header'
import { auth } from '../firebase/firebase'

function HeaderContainer({currentUser}) {
    return (
        <Header>
            <Header.Logo/>
           <Header.NavBar>
               <Header.Item to='/shop'>Shop</Header.Item>
               {currentUser ? <Header.Item to='/signin' onClick={()=>auth.signOut()}>Sign Out</Header.Item>
                                :<Header.Item to='/signin'>Sign In</Header.Item>}
            </Header.NavBar> 
        </Header>
    )
}

export default HeaderContainer
