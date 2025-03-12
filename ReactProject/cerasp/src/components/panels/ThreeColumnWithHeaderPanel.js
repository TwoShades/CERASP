import React from "react";
import "./css/ThreeColumnWithHeaderPanel.css";

const ThreeColumnWithHeaderPanel = ({
  headerContent,
  col1Content,
  col2Content,
  col3Content,
}) => {
  return (
    <div className="grid-layout">
      <div className="header-row">{headerContent}</div>
      <div className="left-column">{col1Content}</div>
      <div className="center-column">{col2Content}</div>
      <div className="right-column">{col3Content}</div>
    </div>
  );
};

export default ThreeColumnWithHeaderPanel;
