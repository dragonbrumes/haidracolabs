import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import PrivacyApp from "./pages/PrivacyApp";

export default function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy-app" element={<PrivacyApp />} />
        </Routes>
      </Router>
    </div>
  )
}