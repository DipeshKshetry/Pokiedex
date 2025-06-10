import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Clothing from "./pages/Clothing";
import Toys from "./pages/Toys";
import Futsal from "./pages/Futsal";
import Printing from "./pages/Printing";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/futsal" element={<Futsal />} />
        <Route path="/printing" element={<Printing />} />
      </Routes>
    </Router>
  );
}

export default App;
