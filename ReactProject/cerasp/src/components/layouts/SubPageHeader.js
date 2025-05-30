import React from "react";
import "./css/SubPageHeader.css";

export default function SubPageHeader({ name, extraContent }) {
  return (
    <div className="subpage-header">
      <h1>{name}</h1>
      {extraContent && <>{extraContent}</>}
    </div>
  );
}
