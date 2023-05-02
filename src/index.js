import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Component/LoginPage/LoginPage";
import CreatePage from "./Component/CraeteNewAccount/CreatePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
            
              < App  />
            </>
          }
        />
        <Route
          path="/CreatePage"
          element={
            <>
            
              < CreatePage  />
            </>
          }
        />
        <Route
          path="/LoginPage"
          element={
            <>
            
              < LoginPage  />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
