import React from 'react';
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  return (
    <div>
      <span>Order Confirmed</span>
      <button onClick={() => navigate(-1)} style={{ margin: "1rem" }}>Back</button>
    </div>
  );
};

export default Order;
