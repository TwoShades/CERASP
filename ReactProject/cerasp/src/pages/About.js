import { useEffect, useState } from "react";
import axios from "axios";
import Employee from "../components/uicomponents/Employee.js";
import Partners, { partnersData } from "../components/uicomponents/Partners";
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
      {/* OVERVIEW */}
      <ScrollPanel colorTheme="themeA" title="about" id="overview">
        <ThreeColumnWithHeaderPanel
          headerContent={<h1>History of Cerasp</h1>}
        />
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
          <EmblaSinglePanel
            slides={[
              "Equipment 1",
              "Equipment 2",
              "Equipment 3",
              "Equipment 4",
              "Equipment 5",
            ]}
            options={options}
            renderSlide={(slide) => (
              <div className="temp-test">
                <h2>{slide}</h2>
              </div>
            )}
          ></EmblaSinglePanel>
        </div>
      </ScrollPanel>

      {/* OUR TEAM */}
      <ScrollPanel title="about" id="our-team">
        <div className="team-section">
          <h1>Team</h1>
          <EmblaCarousel
            slides={[...team, ...team]}
            options={options}
            renderSlide={(member) => (
              <Employee key={member.id} member={member} />
            )}
          />
        </div>
      </ScrollPanel>

      {/* BOARD */}
      <ScrollPanel title="about" id="board">
        <div>
          <h1>hello board..</h1>
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
            slides={["blue", "red", "purple", "grey", "black"]}
            options={options}
            renderSlide={(slide) => (
              <StockImageFetch
                searchTerm={slide}
                imgSource="large"
                orientation="landscape"
                page={1}
                perPage={1}
              />
            )}
          />
        </div>
      </ScrollPanel>

      {/* PRIVACY POLICY */}
      <ScrollPanel title="about" id="">
        <h2>Privacy policy</h2>
      </ScrollPanel>

      <Footer />
    </div>
  );
};

export default About;
