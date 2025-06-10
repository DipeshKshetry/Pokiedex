// src/pages/Printing.js
import React from "react";

function Printing() {
  return (
    <div className="page">
      <h2>Upload Your Design</h2>
      <form action="https://formsubmit.co/youremail@domain.com" method="POST" encType="multipart/form-data">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="address" placeholder="Shipping Address" required />
        <input type="file" name="design" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Printing;
