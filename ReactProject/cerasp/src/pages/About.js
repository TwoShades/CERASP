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
import ThreeColumnWithHeaderPanel from "../components/panels/ThreeColumnWithHeaderPanel.js";

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
        setTeam(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
      <div className="about scroll-container">
        {/* OVERVIEW */}
        <ScrollPanel colorTheme="themeA" title="about" id="overview">
          <ThreeColumnWithHeaderPanel
            headerContent={
              <>
                <h1>History of Cerasp</h1>
                <p>Founded in 2019, the Centre for Expertise and Applied Research in Pharmaceutical 
                    Sciences (CERASP) has a mission to provide applied research and technical support 
                    leading to technology transfer for the development of innovative solutions in the 
                    pharmaceutical field, particularly in biopharmaceuticals, pharmaceutical technology, 
                    production, and Regulatory Affairs. 
                    We serve the life sciences industry. As a trusted partner in this segment, we provide 
                    turnkey support and solutions to help our partners in their product development path and 
                    to facilitate and derisk their commercialization journey. We offer technical training and 
                    stage opportunities to work on industry projects. 
                    A member of the CCTT (College Centers in Technological Transfers) network, we are 
                    affiliated to John Abbott College and Cégep Gérald-Godin and strives to deliver high-quality 
                    services combining innovation and expertise.   </p>
              </>
            }
            col1Content={ 
              <>
                <h1>Mission</h1>
                <p>Develop and support applied research, training, and technology transfer related to the 
                    discovery, development, and evaluation of innovative solutions in the pharmaceutical field, 
                    particularly in biopharmaceutics, pharmaceutical technology, production, and digital 
                    health. 
                </p>
              </>
            }
            col2Content={
              <>
                <h1>Vision</h1>
                <p>Become a strategic partner in applied pharmaceutical research in Quebec and Canada, 
                    recognized for its ability to deliver innovative solutions to its clients, while maintaining 
                    strong connections with educational and research communities at the provincial, federal, 
                    and international levels.
                </p>
              </>
            }
            col3Content={
              <>
                <h1>Values</h1>
                <p>Excellence: The CERASP aims for excellence through quality service and the 
                    implementation of effective solutions to help SMEs thrive. The CERASP prioritizes 
                    dedication and integrity, focusing all its efforts on mutual success in an environment of 
                    respect, loyalty, rigor, and openness. This will be achieved through trust with our clients, 
                    proactivity, and fast service, while ensuring confidentiality. 
                    Innovation in Sustainable Development: Considering the international context of long
                    term climate change, the CERASP is committed to developing innovative technologies that 
                    adhere to the principles of sustainable development and environmental responsibility. The 
                    solutions offered to our clients will be designed to reduce emissions and prioritize the 
                    prudent use of raw materials, opting for processes with minimal environmental impact. 
                    These solutions aim to change the behaviors of users and consumers in the medium term. 
                    Collaboration: The CERASP strives to attract and stimulate the creation of new businesses 
                    by establishing an environment conducive to creativity, applied research, and 
                    technological innovation in Quebec and Canada. The CERASP aspires to be a central hub 
                    in its ecosystem, positively contributing to the advancement of a modern and innovative 
                    industry in the region. The partnership envisioned between the two colleges serves as a 
                    perfect example of solidarity. 
                    Openness: Keeping an open mind to international developments and a constantly evolving 
                    world. 
                  </p>
              </>
            }
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
