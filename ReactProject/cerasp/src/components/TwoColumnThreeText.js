import React from "react";
import "./css/TwoColumnThreeText.css";

const TwoColumnThreeText = ({ circleImage, textUnderImage, titleTextOne, titleTextTwo, titleTextThree,
                              descTextOne, descTextTwo, descTextThree,  className = "" }) => {
  return (
    <div className={`three-component-panel ${className}`}>

      <div className="leftContent">
        <div className="circleImage">{circleImage}</div>
        <div className="textUnderImage">{textUnderImage}</div>
      </div>

      <div className="fieldOneBox">
        <div className="titleTextOne">{titleTextOne}</div>
        <div className="descTextOne">{descTextOne}</div>
      </div>

      <div className="fieldTwoBox">
        <div className="titleTextTwo">{titleTextTwo}</div>
        <div className="descTextTwo">{descTextTwo}</div>
      </div>

      <div className="fieldThreeBox">
        <div className="titleTextThree">{titleTextThree}</div>
        <div className="descTextThree">{descTextThree}</div>
      </div>
    </div>
  );
};

export default TwoColumnThreeText;