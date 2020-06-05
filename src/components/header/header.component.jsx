import React from "react";
import { Link } from "react-router-dom";
// 5) connect
//connect HOC let you to accecss to thing to redux
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
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
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

// mapStatetoProps and connent we will use everywhere we need property from our root reducer
// state parameter is top level root reducer
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
/// first argument -> pass function that allow us to access root reducer
export default connect(mapStateToProps)(Header);
