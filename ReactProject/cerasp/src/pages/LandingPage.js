import { useEffect, useState } from "react";
import Hideable from "../components/Hideable";
import "./LandingPage.css";

const LandingPage = () => {
  const [hideSections, setHideSections] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHideSections(true);
          } else {
            setHideSections(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const section3 = document.querySelector(".scrollable");
    observer.observe(section3);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="landing-container">
      <Hideable shouldHide={hideSections}>
        <section className="full-screen">
          <h1>Welcome to CERASP</h1>
          <p>Scroll to continue</p>
        </section>
      </Hideable>

      <Hideable shouldHide={hideSections}>
        <section className="full-screen">
          <h2>About Us</h2>
          <p>This is Section 2.</p>
        </section>
      </Hideable>

      <section className="scrollable">
        <h2>Discover More</h2>
        <p>Here is more information about what we do.</p>
      </section>
    </div>
  );
};

export default LandingPage;
