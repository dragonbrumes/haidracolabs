import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import PrivacyApp from "./pages/PrivacyApp";
import NavBar from "./pages/components/NavBar";

export default function App() {
  return (
    <div className="">
      <Router>
        <div><NavBar /></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy-app" element={<PrivacyApp />} />
        </Routes>
      </Router>
      <footer className="blockquote-footer text-center">
        <div>Copyright © { new Date().getFullYear() } Hai Draco Labs </div>
      </footer>
    </div>
  )
}