import React from "react";
import "./css/PanelGridAndText.css";

const PanelGridAndText = () => {
  return (
    <div className="panel-grid-and-text">
      <div className="panel-grid">
        <div className="panel-row">
          <div className="panel-cell">1</div>
          <div className="panel-cell">2</div>
          <div className="panel-cell">3</div>
        </div>
        <div className="panel-row">
          <div className="panel-cell">4</div>
          <div className="panel-cell">5</div>
          <div className="panel-cell">6</div>
        </div>
        <div className="panel-row">
          <div className="panel-cell">7</div>
          <div className="panel-cell">8</div>
          <div className="panel-cell">9</div>
        </div>
      </div>
      <div className="panel-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          euismod, erat at sollicitudin ultricies, odio tortor scelerisque
          purus, eget lacinia nunc odio ac elit. Nullam nec ante in mi
          scelerisque ultricies. Nullam nec ante in mi scelerisque ultricies.
          Nullam nec ante in mi scelerisque ultricies.
        </p>
      </div>
    </div>
  );
};

export default PanelGridAndText;
