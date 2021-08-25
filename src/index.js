import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FavouriteContextProvider } from "./components/state-store/FavouriteContext";

ReactDOM.render(
  <FavouriteContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouriteContextProvider>,
  document.getElementById("root")
);

// RouterBrowser is added to check the URLs and its change to load the desired page
