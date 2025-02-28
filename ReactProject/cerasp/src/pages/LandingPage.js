import React, { useState, useEffect } from "react";
import "./css/LandingPage.css";

const LandingPage = () => {
  const [showImage, setShowImage] = useState(true);
  const [showText, setShowText] = useState(false);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowImage(false);
      setShowText(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      setShowText(false);
      setShowPage(true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="landing-page">
      {showImage && <div className="fade-in-out image">Welcome Image</div>}
      {showText && <div className="fade-in-out text">Welcome Text</div>}
      {showPage && <div className="main-content">Actual Landing Page Content</div>}
    </div>
  );
};

export default LandingPage;
