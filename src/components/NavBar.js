import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline"
    };
  };

  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem", backgroundColor: "grey" }}>
      <NavLink
        style={navLinkStyles}
        to="/"
      >Home
      </NavLink>
      <NavLink
        style={navLinkStyles}
        to="/about"
      >About
      </NavLink>
    </nav>
  );
};

export default NavBar;
