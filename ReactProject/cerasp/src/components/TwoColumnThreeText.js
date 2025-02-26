import React from "react";
import "./css/TwoColumnThreeText.css";

const TwoColumnThreeText = ({ circleImage, textUnderImage, titleTextOne, titleTextTwo, titleTextThree,
                              descTextOne, descTextTwo, descTextThree,  className = "" }) => {
  return (
    <div className={`three-component-panel ${className}`}>
      <div className="circleImage">{circleImage}</div>
      <div className="textUnderImage">{textUnderImage}</div>
      <div className="titleTextOne">{titleTextOne}</div>
      <div className="titleTextTwo">{titleTextTwo}</div>
      <div className="titleTextThree">{titleTextThree}</div>
      <div className="descTextOne">{descTextOne}</div>
      <div className="descTextTwo">{descTextTwo}</div>
      <div className="descTextThree">{descTextThree}</div>
    </div>
  );
};

export default TwoColumnThreeText;


document.addEventListener("DOMContentLoaded", function () {
    const circle = document.querySelector(".circle");

    circle.addEventListener("click", function () {
        // Toggle a different color on click
        this.style.backgroundColor =
            this.style.backgroundColor === "rgb(41, 168, 255)" ? "#ff5722" : "#29a8ff";
    });
});
