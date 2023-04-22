import React from "react";
import "./Link.css";
import { NavLink } from "react-router-dom";
function Link({ svg, href, title, className }) {
  return (
    <NavLink to={href} className={className}>
      {title} {svg ? svg : null}
    </NavLink>
  );
}

export default Link;
