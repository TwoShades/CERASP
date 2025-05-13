import "./Pages-css/About.css";
import Footer from "../components/layouts/Footer.js";
import useScrollToPanel from "../hooks/useScrollToPanel";

// Individual Panels //
import AboutOverview from "./about-subpages/AboutOverview.js";
import AboutFacilities from "./about-subpages/AboutFacilities.js";
import AboutEquipments from "./about-subpages/AboutEquipments.js";
import AboutTeam from "./about-subpages/AboutTeam.js";
import AboutPartners from "./about-subpages/AboutPartners.js";
import AboutBoard from "./about-subpages/AboutBoard.js";
import ContactUs from "./ContactUs/ContactUs.js";

const About = () => {
  useScrollToPanel();

  return (
    <div className="about-page page-content">
      {/* OVERVIEW */}
      <div title="about" id="overview">
        <AboutOverview />
      </div>

      {/* FACILITIES */}
      <div title="about" id="facilities">
        <AboutFacilities />
      </div>

      {/* EQUIPMENTS */}
      <div title="about" id="equipments">
        <AboutEquipments />
      </div>

      {/* OUR TEAM */}
      <div title="about" id="our-team">
        <AboutTeam />
      </div>

      {/* BOARD */}
      <div title="about" id="board">
        <AboutBoard />
      </div>

      {/* PARTNERS */}
      <div title="about" id="partners">
        <AboutPartners />
      </div>

      {/* PRIVACY POLICY */}
      <div title="about" id="contact-us-form">
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
};

export default About;
