import React from 'react';
import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

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
      <button onClick={() => {
        setSearchParams({ filter: "active" });
      }}>
        Active Users
      </button>
      <button onClick={() => {
        setSearchParams({});
      }}>
        Reset filter
      </button>
      {showActiveUsers ? (
        <h2>Showing active users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
      <Outlet />
    </>
  );
};

export default Users;
