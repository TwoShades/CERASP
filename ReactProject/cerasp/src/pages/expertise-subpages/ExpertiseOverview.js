import React from "react";
import "./css/ThreeColumnPanel.css";

const ExpertiseOverview = ({
  topRowContent,
  col1Content,
  col2Content,
  col3Content,
}) => {
  return (
    <div className="three-column-panel">
      <div className="top-row">{topRowContent}</div>
      <div className="col1">{col1Content}</div>
      <div className="col2">{col2Content}</div>
      <div className="col3">{col3Content}</div>
    </div>
  );
};

export default ExpertiseOverview;
