import { Route, Routes } from "react-router-dom";
import About from "./components/About.js";
import Home from "./components/Home.js";
import NavBar from "./components/NavBar.js";
import Order from "./components/Order.js";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
