import React from "react";
import ReactDOM from "react-dom/client";

import "./css/fos.css";
import "./font/Monserat/stylesheet.css";
import Router from "./route";
import "./css/global.css";
import "./css/media.css"
import { AppProvider } from "./layouts/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Router />
    </AppProvider>

  </React.StrictMode>
);
