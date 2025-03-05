import React from "react";
import "./css/SixSteps.css";

const SixSteps = ({
  topRowContent,
  row1Content1,
  row1Content2,
  row1Content3,
  row1Content4,
  row2Content5,
  row2Content6,
  row2Content7,
  row2Content8
}) => {
  return (
    <div className="three-column-panel">
      <div className="top-row">{topRowContent}</div>
      <div className="row1con1">{row1Content1}</div>
      <div className="row1con2">{row1Content2}</div>
      <div className="row1con3">{row1Content3}</div>
      <div className="row1con4">{row1Content4}</div>
      <div className="row2con5">{row2Content5}</div>
      <div className="row2con6">{row2Content6}</div>
      <div className="row2con7">{row2Content7}</div>
      <div className="row2con8">{row2Content8}</div>
    </div>
  );
};

export default SixSteps;
