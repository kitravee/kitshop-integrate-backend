import { createStore, applyMiddleware } from "redux";

//install redux-persist
import { persistStore } from "redux-persist";

// logger is middleware
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// push logger to middle ware
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// we will inport in index.js to pass the store context into Provider
