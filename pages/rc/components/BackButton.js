import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => (
  <div style={{ margin: "20px" }}>
    <Link to="/" style={{ textDecoration: "none", color: "#4f46e5" }}>
      ← Back to Home
    </Link>
  </div>
);

export default BackButton;
