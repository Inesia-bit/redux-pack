import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";
import friendReducer from "./features/friends";
import themeReducer from "./features/theme";

const store = configureStore({
  reducer: {
    friend: friendReducer,
    theme: themeReducer,
  },
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
