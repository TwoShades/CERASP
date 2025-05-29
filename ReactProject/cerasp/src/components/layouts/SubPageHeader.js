import React from "react";
import "./css/SubPageHeader.css";

export default function SubPageHeader({ name }) {
  return (
    <div className="subpage-header">
      <h3>{name}</h3>
    </div>
  );
}
