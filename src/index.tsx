import React from "react";
import ReactDOM from "react-dom/client";
import { ClientContextProvider } from "./context/ClientContext";
import { StoreState } from "./context/StateContextProvider";
import "./index.css";
import Routers from "./routers/routers";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ClientContextProvider>
    <StoreState>
      <React.StrictMode>
        <Routers />
        <ToastContainer />
      </React.StrictMode>
    </StoreState>
  </ClientContextProvider>
);
