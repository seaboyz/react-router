import { Route, Routes } from "react-router-dom";
import About from "./components/About.js";
import Home from "./components/Home.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
