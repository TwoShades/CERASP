import { useEffect, useState } from "react";
import axios from "axios";
import Employee from "../components/uicomponents/Employee.js";
import Partners, { partnersData } from "../components/uicomponents/Partners";
import Footer from "../components/layouts/Footer.js";
import ScrollPanel from "../components/layouts/ScrollPanel";
import EmblaCarousel from "../components/interactables/EmblaCarousel.js";
import EmblaSinglePanel from "../components/interactables/EmblaSinglePanel.js";
import StockImageFetch from "../components/placeholders/StockImageFetch";
import useScrollToPanel from "../hooks/useScrollToPanel";
import "./css/About.css";
import EquipmentsPanel from "../components/panels/EquipmentsPanel.js";
import BoardMembersPanel from "../components/panels/BoardMembersPanel.js";
import LearnMoreButton from "../components/interactables/LearnMoreButton.js";
import AboutOverview from "../components/panels/AboutOverview.js";
import teamData from "./reference/team.json";
import ContactUsForm from "../components/panels/ContactUsForm.js";

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
    <div className="about scroll-container">
      {/* OVERVIEW */}

      <ScrollPanel colorTheme="themeA" title="about" id="overview">
        <AboutOverview />
      </ScrollPanel>

      {/* FACILITIES */}
      <ScrollPanel title="about" id="facilities">
        <div className="facilities-section">
          <h1>Facilities</h1>
          <EmblaSinglePanel
            slides={[
              "landsapce",
              "laboratory",
              "industrial",
              "windows",
              "computers",
            ]}
            options={options}
            renderSlide={(slide) => (
              <StockImageFetch
                searchTerm={slide}
                imgSource="large"
                orientation="landscape"
                page={5}
                perPage={1}
              />
            )}
          />
        </div>
      </ScrollPanel>

      {/* EQUIPMENTS */}
      <ScrollPanel title="about" id="equipments">
        <div className="equipments-section">
          <EquipmentsPanel />
        </div>
      </ScrollPanel>

      {/* OUR TEAM */}
      <ScrollPanel title="about" id="our-team">
        <div className="team-section">
          <h1>Team</h1>
          <EmblaCarousel
            slides={teamData.team}
            options={options}
            renderSlide={(member) => (
              <Employee key={member.id} member={member} />
            )}
          />
        </div>
      </ScrollPanel>

      {/* BOARD */}
      <ScrollPanel title="about" id="board">
        <div className="board-section">
          <BoardMembersPanel />
        </div>
      </ScrollPanel>

      {/* PARTNERS */}
      <ScrollPanel title="about" id="partners">
        <div className="team-section">
          <h1>Partners</h1>
          <EmblaCarousel
            slides={partnersData}
            options={options}
            renderSlide={(partner) => (
              <Partners key={partner.name} partner={partner} />
            )}
          />
        </div>
      </ScrollPanel>

      {/* CERASP VIDEOS */}
      <ScrollPanel title="about" id="cerasp-videos">
        <div className="videos-section">
          <h1>Videos</h1>
          <EmblaSinglePanel
            slides={["ShwbF2xodT8"]}
            options={options}
            renderSlide={(slide) => (
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${slide}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          />
        </div>
      </ScrollPanel>

      {/* PRIVACY POLICY */}
      {/* <ScrollPanel title="about" id="contact-us-form">
        <ContactUsForm />
      </ScrollPanel> */}

      <Footer />
    </div>
  );
};

export default About;
