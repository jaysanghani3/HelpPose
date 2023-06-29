import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SharedContextProvider } from "./context/SharedContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SharedContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </SharedContextProvider>
);
reportWebVitals();
