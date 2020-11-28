import React from 'react'
import { connect } from 'react-redux'
import CartDropDown from '../components/CartDropDown'
import CartIcon from '../components/cartIcon'
import Header from '../components/header'
import { auth } from '../firebase/firebase'
//import { toggelCartHidden } from '../redux/cart/cartActions'

function HeaderContainer(props) {
    return (
        <Header>
            <Header.Logo/>
           <Header.NavBar>
               <Header.Item to='/shop'>Shop</Header.Item>
               {props.currentUser ? <Header.Item to='/signin' onClick={()=>auth.signOut()}>Sign Out</Header.Item>
                                :<Header.Item to='/signin'>Sign In</Header.Item>}
                <CartIcon /> 
            </Header.NavBar> 
            {props.hidden ? null: <CartDropDown/>}
        </Header>
    )
}
const mapStateToProps = ({user,cart})=>{
    return {
        currentUser : user.currentUser,
        hidden: cart.hidden
    }
}

//hna madertch despatch hit dert destraction nichan dial action 

export default connect(mapStateToProps)(HeaderContainer);
