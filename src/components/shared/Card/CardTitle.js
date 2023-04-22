import React from "react";
import "./CardTitle.css";
function CardTitle({ lg, sm, center, text }) {
  return (
    <h4
      className={`CardTitle ${lg ? "lg" : sm ? "sm" : ""} ${
        center && "center"
      }`}
    >
      {text}
    </h4>
  );
}

export default CardTitle;
