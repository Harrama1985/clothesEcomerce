import React from 'react'
import { connect } from 'react-redux'
import CartDropDown from '../components/CartDropDown'
import CartIcon from '../components/cartIcon'
import Header from '../components/header'
import { auth } from '../firebase/firebase'
import { selectHidden } from '../redux/cart/cartSelectors'
import { selectCurrentUser } from '../redux/user/userSelectors'
import {createStructuredSelector} from 'reselect'
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
/* const mapStateToProps = (state)=>{
    return {
        currentUser : selectCurrentUser(state),
        hidden: selectHidden(state)
    }
} */

//this is other method makanhtajouch state howa kijibha rasso 
const mapStateToProps = createStructuredSelector(
    {
        currentUser : selectCurrentUser,
        hidden: selectHidden
    }
)

//hna madertch despatch hit dert destraction nichan dial action 

export default connect(mapStateToProps)(HeaderContainer);
