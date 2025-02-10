import React from "react";
import "./Hideable.css";

const Hideable = ({ shouldHide, children }) => {
  return <div className={shouldHide ? "hidden" : ""}>{children}</div>;
};

export default Hideable;
