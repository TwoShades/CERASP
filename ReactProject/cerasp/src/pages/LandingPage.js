import { useEffect, useState } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [panel1Faded, setPanel1Faded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY / window.innerHeight);

      if (window.scrollY > window.innerHeight) {
        setPanel1Faded(true);
      } else {
        setPanel1Faded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTransformStyles = (index) => {
    const opacityThreshold = 0.5;
    const fadeOutThreshold = index * opacityThreshold;

    if (index === 0) {
      if (scrollPos <= fadeOutThreshold) {
        return { opacity: 1 };
      } else if (scrollPos <= fadeOutThreshold + opacityThreshold) {
        return {
          opacity: 1 - (scrollPos - fadeOutThreshold) / opacityThreshold,
        };
      } else {
        return { opacity: 0 };
      }
    } else if (index === 1) {
      if (scrollPos >= opacityThreshold) {
        return { opacity: 1 };
      }
      return { opacity: 0 };
    }

    return { opacity: 1 };
  };

  return (
    <div className="landing-container">
      <div className="container">
        <div
          className={`panel panel1 ${panel1Faded ? "panel1-faded" : ""}`}
          style={{
            ...getTransformStyles(0),
            position: panel1Faded ? "absolute" : "fixed",
            top: panel1Faded ? "0" : "0",
          }}
        >
          <h1>CERASP</h1>
        </div>

        <div className="panel panel2" style={getTransformStyles(1)}>
          {[...Array(6)].map((_, index) => (
            <div className="filler-column" key={index}>
              <div className="filler-box">
                <p>insert text here.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
