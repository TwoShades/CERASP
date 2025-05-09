import { useEffect, useState } from "react";
import axios from "axios";
import "./Pages-css/About.css";
import Footer from "../components/layouts/Footer.js";
import useScrollToPanel from "../hooks/useScrollToPanel";
import BoardMembersPanel from "../components/panels/BoardMembersPanel.js";
import ContactUsForm from "../components/panels/ContactUsForm.js";

// Updated Panels //
import AboutOverview from "./about-subpages/AboutOverview.js";
import AboutFacilities from "./about-subpages/AboutFacilities.js";
import AboutEquipments from "./about-subpages/AboutEquipments.js";
import AboutTeam from "./about-subpages/AboutTeam.js";
import AboutPartners from "./about-subpages/AboutPartners.js";

const About = () => {
  useScrollToPanel();
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const options = { loop: true };

  useEffect(() => {
    axios
      .get(
        "https://celebrated-approval-6e3b18d4f7.strapiapp.com/api/staffs?populate=image"
      )
      .then((response) => {
        const fetchedTeam = response.data.data || [];
        setTeam(fetchedTeam);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        // If API fails, fill with 5 placeholders (for testing)
        setTeam(
          Array.from({ length: 5 }, (_, i) => ({
            id: `employee-${i}`,
            name: `Employee ${i + 1}`,
            about:
              "This is a placeholder employee profile.  Here is some information about them.",
            image: { url: "/photos/placeholder.jpg" },
          }))
        );
      });
  }, []);

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
        <div className="board-section">
          <BoardMembersPanel />
        </div>
      </div>

      {/* PARTNERS */}
      <div title="about" id="partners">
        <AboutPartners />
      </div>

      {/* PRIVACY POLICY */}
      <div title="about" id="contact-us-form">
        {/* <ContactUsForm /> */}
      </div>

      <Footer />
    </div>
  );
};

export default About;
