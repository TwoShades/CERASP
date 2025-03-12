import { useEffect, useState } from "react";
import axios from "axios";
import Employee from "../components/uicomponents/Employee.js";
import Footer from "../components/layouts/Footer.js";
import ScrollPanel from "../components/layouts/ScrollPanel";
import EmblaCarousel from "../components/interactables/EmblaCarousel.js";
import EmblaSinglePanel from "../components/interactables/EmblaSinglePanel.js";
import SideBySidePanel from "../components/panels/SideBySidePanel";
import StockImageFetch from "../components/placeholders/StockImageFetch";
import useScrollToPanel from "../hooks/useScrollToPanel";
import "./css/About.css";
import ThreeColumnWithHeaderPanel from "../components/panels/ThreeColumnWithHeaderPanel.js";

const About = () => {
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
        setTeam(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  useScrollToPanel();

  return (
    <div>
      <div className="about scroll-container">
        {/* OVERVIEW */}
        <ScrollPanel colorTheme="themeA" title="about" id="overview">
          <ThreeColumnWithHeaderPanel
            headerContent={<h1>History of Cerasp</h1>}
          />
        </ScrollPanel>

        {/* OUR TEAM */}
        <ScrollPanel colorTheme="themeA" title="about" id="our-team">
          <div className="team-section">
            <h2>Team</h2>
            <EmblaCarousel
              slides={[...team, ...team]}
              options={options}
              renderSlide={(member) => (
                <Employee key={member.id} member={member} />
              )}
            />
          </div>
        </ScrollPanel>

        {/* FACILITIES */}
        <ScrollPanel title="about" id="facilities">
          <div className="facilities-section">
            <EmblaSinglePanel
              slides={team}
              options={options}
              renderSlide={(member) => (
                <Employee key={member.id} member={member} />
              )}
            />
          </div>
        </ScrollPanel>

        {/* PARTNERS */}
        <ScrollPanel colorTheme="themeB" title="about" id="partners">
          <div>
            <h1>hello</h1>
          </div>
        </ScrollPanel>

        {/* CERASP VIDEOS */}
        <ScrollPanel colorTheme="themeA" title="about" id="cerasp-videos">
          <SideBySidePanel
            leftContent={
              <StockImageFetch
                searchTerm="laboratory"
                imgSource="large"
                orientation="portrait"
                page={5}
                perPage={1}
              />
            }
            rightContent={
              <>
                <h1>Video about CERASP</h1>
              </>
            }
          />
        </ScrollPanel>

        {/* PRIVACY POLICY */}
        <ScrollPanel colorTheme="themeA" title="about" id="">
          <h2>Privacy policy</h2>
        </ScrollPanel>

        <Footer />
      </div>
    </div>
  );
};

export default About;
