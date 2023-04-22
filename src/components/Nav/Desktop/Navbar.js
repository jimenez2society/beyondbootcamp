import React from "react";
import "./Navbar.css";
import { bbLogo } from "../../../assets/svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <NavLink to="/" className="Navbar-logo">
        {bbLogo}
      </NavLink>
      <div className="Navbar-divider"></div>
      <nav className="Navbar-list-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
