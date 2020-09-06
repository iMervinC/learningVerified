import React, { useState, useContext } from "react";
import "./Navbar.scss";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const [cart] = useContext(CartContext);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="NavbarItems">
      <Link className="navbar-logo" to="/">
        <figure>
          <img className="logo" src={logo} alt="Logo" />
        </figure>
      </Link>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                {item.title}
              </Link>
            </li>
          );
        })}
        <li>
          <Link to="/cart">
            <i className=" nav-links fas fa-shopping-cart"> {cart.length}</i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
