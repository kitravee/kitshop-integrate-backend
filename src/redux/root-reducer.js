// reducer object that represents all of the state of our application
// 3) create Reducer and Root reducer

// combineReducers between root and other individual
import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});

// 4) we will bring rootReducer to store (Create store)
// 5) Create action
