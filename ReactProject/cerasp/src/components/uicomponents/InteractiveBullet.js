import React from "react";
import "./css/InteractiveBullet.css";

export default function InteractiveBullet({
  title,
  description,
  variant = "default",
}) {
  return (
    <div
      className={`interactive-bullet-wrapper ${variant}`}
    >
      <details className={`interactive-bullet ${variant}`}>
        <summary>
          <span className="interactive-bullet-icon"></span>
          <span className="interactive-bullet-title">
            {title}
          </span>
        </summary>
        <p className="interactive-bullet-description">
          {description}
        </p>
      </details>
    </div>
  );
}
