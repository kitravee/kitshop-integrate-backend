// reducer object that represents all of the state of our application
// 3) create Reducer and Root reducer

// combineReducers between root and other individual
import { combineReducers } from "redux";

// install local or session storage
import { persistReducer } from "redux-persist";

//Want local storage
import storage from "redux-persist/lib/storage";
//can also import session

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);

// 4) we will bring rootReducer to store (Create store)
// 5) Create action
