import { Route, Routes } from "react-router-dom";
import About from "./components/About.js";
import Home from "./components/Home.js";
import NavBar from "./components/NavBar.js";
import Order from "./components/Order.js";
import NoMatch from "./components/NoMatch.js";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order" element={<Order />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
