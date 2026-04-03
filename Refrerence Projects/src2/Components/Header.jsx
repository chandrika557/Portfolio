import React from "react";
import { NavLink } from "react-router-dom";
import "./Styles.scss";

function Header() {
  return (
    <header className="header">
      <h2 className="logo">MyApp</h2>

      <nav>
        <NavLink to="/" >
          Home
        </NavLink>

        <NavLink to="/about" >
          About
        </NavLink>

        <NavLink to="/contact/1" >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;