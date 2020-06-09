import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
//redux-persist -> can use in multiple platform react-native electron
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";

import "./index.css";
import App from "./App";

// Redux setup 1
// 1) yarn add redux redux-logger react-redux
// At index.js we will put new component that we get from react redux newGive app access store and reducer
// Provider wrap around App because we want app to have access to this store object that we get from redux
// Provider is parent of everything
// 2) we will create the store at folder redux that we will store all of our code that relate to redux

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);
