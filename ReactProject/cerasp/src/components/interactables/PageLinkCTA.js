import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext";
import useLenis from "../../hooks/useLenis";
import "./css/PageLinkCTA.css";

export default function PageLinkCTA({
  text = "Click Here",
  url,
  className,
  onClick, // new optional prop
}) {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const { scrollToTopWithLenis } = useLenis();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    if (url) {
      scrollToTopWithLenis();
      navigate(url);
    }
  };

  return (
    <div
      className={`page-link-cta ${className || ""}`}
      onClick={handleClick}
      style={{ cursor: "pointer", textDecoration: "none" }}
    >
      {text}
    </div>
  );
}
