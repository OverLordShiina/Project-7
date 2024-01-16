import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About/about";
import ErrorPage from "./pages/404/ErrorPage";
import Logement from "./pages/Logement/logement";
import "./style/index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/logement/:logementId" element={<Logement />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
