import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store/index";

import "./styles/index.scss";
import { Pomodoro } from "./components/Pomodoro";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Pomodoro />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
