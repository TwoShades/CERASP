import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext";

// pass location param
export default function PageLinkCTA({
  text = "Click Here",
  url,
}) {
  const language = useContext(LanguageContext);
  return (
    <>
      <Link
        to={url}
        className="learn-more-button"
        style={{ textDecoration: "none" }}
      >
        {text}
      </Link>
    </>
  );
}
