import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <input
        type="search"
        placeholder="search product"
      />
      <nav style={{
        display: "flex",
        gap: "1rem"
      }}>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
