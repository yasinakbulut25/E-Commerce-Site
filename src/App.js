import Header from "./components/Header";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Products from "./components/Products";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-section">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </div>

      <footer className="footer">
        © Developed by
        <Link target="_blank" to="https://www.linkedin.com/in/yasinakbulut/">
          Yasin Akbulut
        </Link>
      </footer>
    </div>
  );
}

export default App;
