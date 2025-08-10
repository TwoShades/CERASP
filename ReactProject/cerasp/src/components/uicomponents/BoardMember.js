import React from "react";
import "./css/Employee.css"; // reuse the same styles
import AnimateObject from "./AnimateObject";

const BoardMember = ({ member }) => {
  const defaultMember = {
    Name: "John Doe",
    Title: "Default Board Member Title",
    Affiliation: "Default Affiliation",
    Picture: "/photos/placeholder.jpg",
  };

  const finalMember = member || defaultMember;

  const imageUrl =
    finalMember.Picture && finalMember.Picture !== ""
      ? finalMember.Picture
      : "/photos/placeholder.jpg";

  return (
    <AnimateObject
      variantsToRun={"slowFadeIn"}
      className="employee-card" // same styling as Employee
    >
      {/* Background image div */}
      <div
        className="employee-background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Blue paper background div - separate bottom section */}
      <div className="employee-blue-paper-background">
        <h3>{finalMember.Name}</h3>
        <p>{finalMember.Title}</p>
        <p
          style={{
            marginTop: "0.5em",
            // fontStyle: "italic",
            fontWeight: "600",
          }}
        >
          {finalMember.Affiliation || ""}
        </p>
      </div>
    </AnimateObject>
  );
};

export default BoardMember;
