import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/style.css";
import "./assets/css/header.css";
import "./assets/css/categories.css";
import "./assets/css/contact.css";
import "./assets/css/products.css";
import "./assets/css/product-detail.css";
import "./assets/css/cart.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./context/ShopContext";
import "react-loading-skeleton/dist/skeleton.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
