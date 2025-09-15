import React from "react";
import "./css/Employee.css";
import AnimateObject from "./AnimateObject";

const Employee = ({ member }) => {
  const defaultMember = {
    Name: "John Doe",
    Title: "This is a default employee profile.",
    LinkedIn: "https://www.linkedin.com/",
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
      className="employee-card"
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
        {finalMember.LinkedIn && (
          <a
            href={finalMember.LinkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="linkedin"
              src="/logos/linkedinlogo.png"
              alt="LinkedIn Logo"
            />
          </a>
        )}
      </div>
    </AnimateObject>
  );
};

export default Employee;
