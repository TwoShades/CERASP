import "./css/AboutOverview.css";
import React from "react";

export default function AboutOverview() {
  return (
    <div className="about-overview">
      <div className="about-overview-layout">
        <div className="about-overview-header">
          <h1>ABOUT US</h1>
          <p>
            Founded in 2019, the Centre for Expertise and Applied Research in
            Pharmaceutical Sciences (CERASP) supports applied research,
            technology transfer, and technical training in biopharmaceuticals,
            pharmaceutical technology, production, and Regulatory Affairs. As a
            trusted life sciences partner, we provide turnkey solutions to
            streamline product development and reduce commercialization risks.
            We also offer industry-focused training and internships. A member of
            the CCTT network, CERASP is affiliated with John Abbott College and
            Cégep Gérald-Godin, delivering high-quality services through
            innovation and expertise.
          </p>
        </div>

        <div className="about-overview-sections">
          <div className="about-overview-mission">
            <h2>MISSION</h2>
            <p>
              Advance research and training in pharmaceutical innovation to
              drive cutting-edge solutions. Develop and evaluate new solutions
              in biopharmaceutics and technology to enhance product quality.
              Support production and digital health advancements to ensure the
              industry's growth and transformation.
            </p>
          </div>
          <div className="about-overview-vision">
            <h2>VISION</h2>
            <p>
              Be a leading partner in applied pharmaceutical research in Quebec
              and Canada by providing transformative solutions. Deliver
              innovative solutions to clients while ensuring their success.
              Foster strong ties with educational and research communities
              worldwide to collaborate and advance pharmaceutical technologies.
            </p>
          </div>
          <div className="about-overview-values">
            <h2>VALUES</h2>
            <p>
              Excellence & Integrity: We aim to provide high-quality service
              with dedication, trust, and confidentiality. Client-Focused
              Solutions: We focus on delivering fast, proactive, and mutually
              successful solutions. Sustainable Innovation: We are committed to
              developing eco-friendly technologies with long-term environmental
              responsibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
