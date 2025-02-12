import React from "react";
import "./ScrollPanel.css";

const ScrollPanel = ({ children, bgColor, txtColor }) => {
  const panelStyle = {
    backgroundColor: bgColor,
    color: txtColor,
  };

  return (
    <div className="scroll-panel" style={panelStyle}>
      {children}
    </div>
  );
};

export default ScrollPanel;
