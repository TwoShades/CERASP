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

        <div className="about-overview-primary-sections">
          <div className="about-overview-primary">
            <h2>MISSION</h2>
            <p>
              Advance research and training in pharmaceutical innovation to
              drive cutting-edge solutions. Develop and evaluate new solutions
              in biopharmaceutics and technology to enhance product quality.
              Support production and digital health advancements to ensure the
              industry's growth and transformation.
            </p>
          </div>
          <div className="about-overview-primary">
            <h2>VISION</h2>
            <p>
              Be a leading partner in applied pharmaceutical research in Quebec
              and Canada by providing transformative solutions. Deliver
              innovative solutions to clients while ensuring their success.
              Foster strong ties with educational and research communities
              worldwide to collaborate and advance pharmaceutical technologies.
            </p>
          </div>
          <div className="about-overview-primary">
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
        <div class="about-overview-secondary-sections">
          <details class="about-overview-secondary">
            <summary>Excellence</summary>
            <p>
              The CERASP aims for excellence through quality service and the
              implementation of effective solutions to help SMEs thrive. The
              CERASP prioritizes dedication and integrity, focusing all its
              efforts on mutual success in an environment of respect, loyalty,
              rigor, and openness. This will be achieved through trust with our
              clients, proactivity, and fast service, while ensuring
              confidentiality.
            </p>
          </details>

          <details class="about-overview-secondary">
            <summary>Innovation in Sustainable Development</summary>
            <p>
              Considering the international context of long-term climate change,
              the CERASP is committed to developing innovative technologies that
              adhere to the principles of sustainable development and
              environmental responsibility. The solutions offered to our clients
              will be designed to reduce emissions and prioritize the prudent
              use of raw materials, opting for processes with minimal
              environmental impact. These solutions aim to change the behaviors
              of users and consumers in the medium term.
            </p>
          </details>

          <details class="about-overview-secondary">
            <summary>Collaboration</summary>
            <p>
              The CERASP strives to attract and stimulate the creation of new
              businesses by establishing an environment conducive to creativity,
              applied research, and technological innovation in Quebec and
              Canada. The CERASP aspires to be a central hub in its ecosystem,
              positively contributing to the advancement of a modern and
              innovative industry in the region. The partnership envisioned
              between the two colleges serves as a perfect example of
              solidarity.
            </p>
          </details>

          <details class="about-overview-secondary">
            <summary>Openness</summary>
            <p>
              Keeping an open mind to international developments and a
              constantly evolving world.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
