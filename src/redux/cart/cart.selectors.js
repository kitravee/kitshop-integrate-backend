import { createSelector } from "reselect";

// 2 type of selector
// 1) the first type is called an input selector that doesn't use create selector
// 2) the second type is called an output selector that does use input selectors and creates selector to build themselves.

// input selector
// we select cart from state
// this function return Object of cart
const selectCart = (state) => state.cart;

// the reason we need this input selector is because this next selector we're going to build is going to actually use create selector.

// The first argument is a collection so an array of input selectors.
// the second argument is going to be a function that will return the value we want out of the selector.
// this function return cart.carItems (Array)
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
// now createSelector is memorize selector bacause of "createSelector"

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatorQuantity, cartItem) =>
        accumulatorQuantity + cartItem.quantity,
      0
    )
);
