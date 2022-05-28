import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
