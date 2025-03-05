import React from "react";
import "./css/PanelGridAndText.css";

const PanelGridAndText = ({
  p1Content,
  p2Content,
  p3Content,
  p4Content,
  p5Content,
  p6Content,
  pTextContent,
}) => {
  return (
    <div className="panel-grid-and-text">
      <div className="panel-cell-1">{p1Content}</div>
      <div className="panel-cell-2">{p2Content}</div>
      <div className="panel-cell-3">{p3Content}</div>
      <div className="panel-cell-4">{p4Content}</div>
      <div className="panel-cell-5">{p5Content}</div>
      <div className="panel-cell-6">{p6Content}</div>
      <div className="panel-text">{pTextContent}</div>
    </div>
  );
};

export default PanelGridAndText;
