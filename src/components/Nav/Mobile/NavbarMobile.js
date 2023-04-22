import React from "react";
import "./NavbarMobile.css";
import { bbLogo, hamburger } from "../../../assets/svg";
import { NavLink } from "react-router-dom";
function NavbarMobile() {
  return (
    <div className="NavbarMobile">
      <NavLink to="/" className="Navbar-logo-mobile">
        {bbLogo}
      </NavLink>
      <span className="nav-toggler-mobile">{hamburger}</span>
    </div>
  );
}

export default NavbarMobile;
