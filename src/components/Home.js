import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>Home</h1>
			<button onClick={() => navigate("/order")}>Place order</button>
			{/* replace option will replace the history instead push the next url to history */}
			{/* <button onClick={() => navigate("/order", { replace: true })}>Place order</button> */}
		</div>
	);
};

export default Home;
