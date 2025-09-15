import "./Pages-css/About.css";
import Footer from "../components/layouts/Footer.js";
import useScrollToPanel from "../hooks/useScrollToPanel";
import useScrollOnNavigate from "../hooks/useScrollOnNavigate.js";

// Individual Panels //
import AboutOverview from "./about-subpages/AboutOverview.js";
import AboutFacilities from "./about-subpages/AboutFacilities.js";
import AboutEquipments from "./about-subpages/AboutEquipments.js";
import AboutTeam from "./about-subpages/AboutTeam.js";
import AboutBoard from "./about-subpages/AboutBoard.js";
import ContactUs from "./ContactUs/ContactUs.js";

const About = () => {
  useScrollToPanel();
  useScrollOnNavigate();

  return (
    <div className="about-page page-content">
      {/* OVERVIEW */}
      <div id="overview">
        <AboutOverview />
      </div>

      {/* FACILITIES */}
      <div id="facilities">
        <AboutFacilities />
      </div>

      {/* EQUIPMENTS */}
      <div id="equipments">
        <AboutEquipments />
      </div>

      {/* OUR TEAM */}
      <div id="our-team">
        <AboutTeam />
      </div>

      {/* BOARD */}
      <div id="board">
        <AboutBoard />
      </div>

      {/* PRIVACY POLICY */}
      <div id="contact-us-form">
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
};

export default About;
