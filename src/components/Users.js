import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Users = () => {
  return (
    <>
      <ul style={{
        display: "flex",
        gap: "1rem"
      }}>
        <Link to="1">user 1</Link>
        <Link to="2">user 2</Link>
        <Link to="3">user 3</Link>
        <Link to="/users/admin">Admin</Link>
      </ul>
      <Outlet />
    </>
  );
};

export default Users;
