import React from "react";
import "./css/TwoImageTwoText.css";

const TwoImageTwoText = ({ leftImage, leftText, rightImage, rightText, className = "" }) => {
    return (
        <div className={`two-image-two-text ${className}`}>
            <div className="image-left-panel">{leftImage}</div>
            <div className="text-left-panel">{leftText}</div>
            <div className="image-right-panel">{rightImage}</div>
            <div className="text-right-panel">{rightText}</div>
        </div>
    );
};

export default TwoImageTwoText;
