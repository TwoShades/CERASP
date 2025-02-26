import React from "react";
import "./css/PanelGridAndText.css";

const PanelGridAndText = ({
  p1Content,
  p2Content,
  p3Content,
  p4Content,
  p5Content,
  p6Content,
}) => {
  return (
    <div className="panel-grid-and-text">
      <div className="panel-cell-1">{p1Content}</div>
      <div className="panel-cell-2">{p2Content}</div>
      <div className="panel-cell-3">{p3Content}</div>
      <div className="panel-cell-4">{p4Content}</div>
      <div className="panel-cell-5">{p5Content}</div>
      <div className="panel-cell-6">{p6Content}</div>
      <div className="panel-text">
        <h1>Our Equipment</h1>
        Where does it come from? Contrary to popular belief, Lorem Ipsum is not
        simply random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem
        Ipsum passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source. Lorem Ipsum comes from
        sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
        Extremes of Good and Evil)
      </div>
    </div>
  );
};

export default PanelGridAndText;
