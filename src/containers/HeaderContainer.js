import React from "react";
import { connect } from "react-redux";
import CartDropDown from "../components/CartDropDown";
import CartIcon from "../components/cartIcon";
import Header from "../components/header";
import { auth } from "../firebase/firebase";
import { selectHidden } from "../redux/cart/cartSelectors";
import { selectCurrentUser } from "../redux/user/userSelectors";
import { createStructuredSelector } from "reselect";

function HeaderContainer(props) {
  return (
    <Header>
      <Header.Logo />
      <Header.NavBar>
        <Header.Item to="/shop">Shop</Header.Item>
        {props.currentUser ? (
          <Header.Item to="/signin" onClick={() => auth.signOut()}>
            Sign Out
          </Header.Item>
        ) : (
          <Header.Item to="/signin">Sign In</Header.Item>
        )}
        <CartIcon />
      </Header.NavBar>
      {props.hidden ? null : <CartDropDown />}
    </Header>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden,
});

export default connect(mapStateToProps)(HeaderContainer);
