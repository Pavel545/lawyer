import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./route";

import "./css/fos.css";
import "./font/Monserat/stylesheet.css";
import { Headers } from "./bloc/header";
import { Footer } from "./bloc/footer";
import { BrowserRouter, HashRouter } from "react-router-dom";
import ScrollToTop from "./top";
import "./css/media.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Headers />
      <ScrollToTop>
      <AppRoutes />
      </ScrollToTop>

      <Footer />
    </HashRouter>
  </React.StrictMode>
);
