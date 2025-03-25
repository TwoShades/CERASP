import React, { useState, useEffect } from "react";
import ScrollPanel from "../components/layouts/ScrollPanel";
import "./css/LandingPage.css";

const LandingPage = () => {
  const [showSquare, setShowSquare] = useState(true);
  const [showTriangle, setShowTriangle] = useState(false);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowSquare(false);
      setShowTriangle(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      setShowTriangle(false);
      setShowPage(true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="landing scroll-container">

      <ScrollPanel title="landing" id="landing">

        <div className="landing-page">
          {showSquare && <div className="fade-in-out square"></div>}
          {showTriangle && <div className="fade-in-out triangle"></div>}
          {showPage && <div className="main-content">Actual Landing Page Content</div>}
        </div>

      </ScrollPanel>


      
          {/*   ===================
                =====OVERVIEW======
                ===================
          */}


        <ScrollPanel title="landing" id="overview">
          <p>OVERVIEW</p>
        
        </ScrollPanel>

          {/*   ============================
                =====Equipment Updates======
                ============================
          */}

        <ScrollPanel title="landing" id="welcome">
          <p>Equipment Updates</p>
          {/* Button to trigger the modal */}
          {/* <button onClick={handleOpenModal}>Open Modal</button> */}
        </ScrollPanel>
      
    </div>
  );
};

export default LandingPage;
