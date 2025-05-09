import React from "react";
import "./css/ExpertiseFormulation.css";

const ExpertiseFormulation = () => {
  return (
    <div className="expertise-panel">
      <div className="left">
        <div className="circle" />
        <p className="caption">FORMULATIONS OF PHARMACEUTICALS</p>
      </div>

      <div className="right">
        <div className="fieldBox">
          <h2 className="title">We Offer</h2>
          <p className="desc">
            Expert formulation services tailored to the needs of pharmaceuticals, animal health products, natural health products (NHPs), and nutraceuticals. Our services include the development and optimization of drug formulations, ensuring efficacy, stability, and safety.
          </p>
        </div>

        <div className="fieldBox">
          <h2 className="title">We Work</h2>
          <p className="desc">
            To create the appropriate dosage forms—such as tablets, capsules, softgels, gummies, creams, liquids, ointments and injectables—while adhering to regulatory standards and industry best practices.
          </p>
        </div>

        <div className="fieldBox">
          <h2 className="title">We Help</h2>
          <p className="desc">
            With product improvement, process optimization, and ensure that formulations meet market requirements for both human and animal health sectors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseFormulation;
