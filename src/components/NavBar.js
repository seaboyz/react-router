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
    <nav
      style={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        backgroundColor: "grey",
        marginBottom: "1rem"
      }}>
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
      <NavLink
        style={navLinkStyles}
        to="/products"
      >Products
      </NavLink>
      <NavLink
        style={navLinkStyles}
        to="/users"
      >Users
      </NavLink>
    </nav>
  );
};

export default NavBar;
