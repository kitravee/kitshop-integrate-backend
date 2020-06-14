import { createStore, applyMiddleware } from "redux";

//install redux-persist
import { persistStore } from "redux-persist";

// logger is middleware
import logger from "redux-logger";

import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

// push logger to middle ware
const middlewares = [thunk];

// normal it set to development
// development production and test
// when development use logger but production we not use logger
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// we will inport in index.js to pass the store context into Provider
