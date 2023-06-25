import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SharedContextProvider } from "./context/SharedContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SharedContextProvider>
    <App />
  </SharedContextProvider>
);
reportWebVitals();
