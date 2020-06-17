//Create cartIcon

import React from "react";

import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
//import svg as component
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// even if this Object not update, but other state get update we treat all state is new, so this mapstateToProps alway call
// Memoizatoion Reselects in redux can help me
const mapStatetoProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapStatetoProps, mapDispatchToProps)(CartIcon);
