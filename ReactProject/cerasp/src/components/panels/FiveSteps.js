import React from "react";
import "./css/FiveSteps.css";

const FiveSteps = ({ topRowContent, step1, step2, step3, step4, step5 }) => {
  return (
    <div className="five-steps-grid-layout">
      <div className="top-row">{topRowContent}</div>
      <div className="step1">{step1}</div>
      <div className="step2">{step2}</div>
      <div className="step3">{step3}</div>
      <div className="step4">{step4}</div>
      <div className="step5">{step5}</div>
    </div>
  );
};

export default FiveSteps;
