import React from "react";
import "./css/ThreeColumnPanel.css";

const ThreeColumnPanel = ({
  topRowContent,
  col1Content,
  col2Content,
  col3Content,
}) => {
  return (
    <div class="three-column-panel">
      <div class="top-row">{topRowContent}</div>
      <div class="col1">{col1Content}</div>
      <div class="col2">{col2Content}</div>
      <div class="col3">{col3Content}</div>
    </div>
  );
};

export default ThreeColumnPanel;
