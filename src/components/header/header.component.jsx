import React from "react";
import { Link } from "react-router-dom";
// 5) connect
//connect HOC let you to accecss to thing to redux
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";

import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { signOutStart } from "../../redux/user/user.actions.js";

import { createStructuredSelector } from "reselect";

import "./header.styles.scss";

//currentUser get from store
const Header = ({ currentUser, hidden, signOutStart }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={signOutStart}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

// mapStatetoProps and connent we will use everywhere we need property from our root reducer
// state parameter is top level root reducer
// ⭐ new destructure syntax {x : {y}}
//createStructuredSelector user for auto pass state to each selector (do not have to selectCurrentUser(state))
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
/// first argument -> pass function that allow us to access root reducer
export default connect(mapStateToProps, mapDispatchToProps)(Header);
