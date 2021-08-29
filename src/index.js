import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { FavoritesProvider } from "./store/favorites-context";

ReactDOM.render(
    <FavoritesProvider>
  <BrowserRouter>
      <App />
  </BrowserRouter>,
    </FavoritesProvider>,
  document.getElementById("root")
);

reportWebVitals();
