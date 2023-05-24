import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
    </nav>
  );
};

export default NavBar;
