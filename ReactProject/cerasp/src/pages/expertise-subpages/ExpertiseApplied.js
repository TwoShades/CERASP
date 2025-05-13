import React from "react";
import "./css/ExpertiseApplied.css";

const ExpertiseApplied = ({ topRowContent, step1, step2, step3, step4, step5 }) => {
  return (
    <div class="five-steps-grid-layout">
      <div class="top-row">{topRowContent}</div>
      <div class="step step1">
        <div class="icon">1</div>
        <div class="expertise-applied-title">FORMULATE</div>
        <div class="content">
          <p>Formulate, validate and prepare new products after the results of basic research or 
          to find the right molecules.</p>
        </div>
      </div>
      <div class="step step2">
        <div class="icon">2</div>
        <div class="expertise-applied-title">SUPPORT</div>
        <div class="content">
          <p>Support the development of production processes through new processes, 
          including standard operating procedures.</p>
        </div>
      </div>
      <div class="step step3">
        <div class="icon">3</div>
        <div class="expertise-applied-title">TRANSFER</div>
        <div class="content">
          <p>Transfer and adapt technological innovations for the development of scale-up pilot 
          scale production. </p>
        </div>
      </div>
      <div class="step step4">
        <div class="icon">4</div>
        <div class="expertise-applied-title">SELECT</div>
        <div class="content">
          <p>Select and configure equipment for research and production from an Industry 
          perspective. </p>
        </div>
      </div>
      <div class="step step5">
        <div class="icon">5</div>
        <div class="expertise-applied-title">DEVELOP</div>
        <div class="content">
          <p>Formulate and develop pilot processes, prototypes and batches. </p>
        </div>
      </div>
      <div class="bottom-row">
        <p>Our fields of expertise used for applied research projects enable us to propose innovative 
        solutions for various technologies and product formats. </p>
      </div>
    </div>
  );
};

export default ExpertiseApplied;
