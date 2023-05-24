import { Route, Routes } from "react-router-dom";
import About from "./components/About.js";
import Home from "./components/Home.js";
import NavBar from "./components/NavBar.js";
import Order from "./components/Order.js";
import NoMatch from "./components/NoMatch.js";
import Products from "./components/Products.js";
import FeaturedProduct from "./components/FeaturedProduct.js";
import NewProduct from "./components/NewProduct.js";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order" element={<Order />} />
        <Route path="products" element={<Products />} >
          {/* use the index route to render the default nested route */}
          <Route index element={<FeaturedProduct />} />
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
