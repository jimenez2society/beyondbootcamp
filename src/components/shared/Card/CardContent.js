import React from "react";
import "./CardContent.css";
function CardContent({ lg, sm, children }) {
  return (
    <p className={`CardContent ${lg && "lg"} ${sm && "sm"}`}>{children}</p>
  );
}

export default CardContent;
