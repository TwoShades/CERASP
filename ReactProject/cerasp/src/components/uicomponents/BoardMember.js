import React from "react";
import "./css/BoardMember.css";
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
      className="board-member-card"
    >
      {/* Background image div */}
      <div
        className="board-member-background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Blue paper background div */}
      <div className="board-member-blue-paper-background">
        <h3>{finalMember.Name}</h3>
        <p>{finalMember.Title}</p>
        <p
          style={{
            marginTop: "0.5em",
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
