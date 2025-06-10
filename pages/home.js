import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="title">Welcome to Pokiedex</h1>
      <p>We are coming soon. Stay tuned!</p>

      <div className="nav-buttons">
        <Link to="/about">About Us</Link>
        <Link to="/clothing">Clothing</Link>
        <Link to="/toys">Toys</Link>
        <Link to="/futsal">Futsal</Link>
        <Link to="/printing">Printing</Link>
      </div>
    </motion.div>
  );
}

export default Home;
