import React from "react";
import "./css/TestPanel.css"; // Import the CSS file for styling

const TestPanel = () => {
  return (
    <div className="test-panel">
      <div className="test-panel-1">
        <h1>PANEL 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="test-panel-2">
        <h1>PANEL 2</h1>
        <p>
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
          nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          Praesent mauris. Fusce nec tellus sed augue semper porta.
        </p>
      </div>
      <div className="test-panel-3">
        <h1>PANEL 3</h1>
        <p>
          Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
          varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus
          magna felis sollicitudin mauris.
        </p>
      </div>
    </div>
  );
};

export default TestPanel;
