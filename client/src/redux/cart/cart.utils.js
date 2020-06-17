//when we add mutiple item, it is dupplicated, avoid by adding new property "quantity"

// Utility functions allow us to keep our file clean and organize in one location
// function that we may need in multiple file

// Note Param "cartItems" is item in array
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exitingCartItem = cartItems.find(
    //base on if if find return "data in array" else return "undefined"
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  //check exitingCartItem if true
  if (exitingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  // if each cartItem match with cartItemToRemove
  const exitingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // if quantity === 1 filter it out
  if (exitingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? // if match return with quantity - 1
        { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
