import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { useShopContext } from "../context/ShopContext";
function Header() {
  const { cart, theme, changeTheme } = useShopContext();
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => setNavbar(!navbar);
  const navbarClass = navbar ? "links navbar open" : "links navbar";

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/">
          <div className="logo-area">
            <img src={Logo} alt="logo" />
            <span>Shop Center</span>
          </div>
        </Link>
        <div className={navbarClass}>
          <NavLink
            onClick={() => setNavbar(false)}
            to="./"
            className="link-item"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setNavbar(false)}
            to="/products"
            className="link-item"
          >
            Products
          </NavLink>
          <NavLink
            onClick={() => setNavbar(false)}
            to="/contact"
            className="link-item"
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => setNavbar(false)}
            to="/cart"
            className="link-item"
          >
            Cart
          </NavLink>
        </div>
        <div className="links">
          <Link to="./" className="link-item" href="">
            <i className="bi bi-person"></i> Account
          </Link>
          <span onClick={() => changeTheme()} className="link-item theme-btn">
            {theme ? (
              <i className="bi bi-sun"></i>
            ) : (
              <i className="bi bi-moon"></i>
            )}
          </span>
          <Link to="cart" className="bag-link" href="cart.html">
            <i className="bi bi-bag"></i>{" "}
            <span className="bag-count">{cart.length}</span>
          </Link>
          <span onClick={changeNavbar} className="link-item menu-link">
            {navbar ? (
              <i className="bi bi-x"></i>
            ) : (
              <i className="bi bi-list"></i>
            )}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
