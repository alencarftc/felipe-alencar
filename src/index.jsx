import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept();

const component = <App version={process.env.VERSION} />;

ReactDOM.render(component, document.getElementById("app"));
