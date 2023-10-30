import React from "react";
import ReactDOM from "react-dom/client";
import { StoreProvider } from "./global";
import { Routes } from "./routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <Routes />
    </StoreProvider>
  </React.StrictMode>
);
