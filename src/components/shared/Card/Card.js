import React from "react";
import { arrowSm } from "../../../assets/svg";
import Link from "../Link";
import "./Card.css";
function Card({ className, children, lg, sm, span }) {
  return (
    <div
      className={`Card ${lg && "lg"} ${sm && "sm"} ${
        span && "span"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
