import { createStore, applyMiddleware } from "redux";

// logger is middleware
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// push logger to middle ware
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
// we will inport in index.js to pass the store context into Provider
