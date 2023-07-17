import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import "./assets/index.scss";
import App from "./App";
import CartProvider from "./CartProvider";
import {AppProvider} from "./context/AppContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
