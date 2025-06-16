import React from "react";
import "./css/LandingAboutUs.css";

const LandingAboutUs = () => {
  const stats = [
    {
      number: "10+",
      label: "Years Experience",
      icon: "🚀",
    },
    {
      number: "500+",
      label: "Projects Completed",
      icon: "💼",
    },
    {
      number: "50+",
      label: "Team Members",
      icon: "👥",
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      icon: "⭐",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We push boundaries and embrace cutting-edge technologies to deliver exceptional results.",
      icon: "💡",
    },
    {
      title: "Quality",
      description:
        "Excellence is our standard. We never compromise on the quality of our work and solutions.",
      icon: "🎯",
    },
    {
      title: "Collaboration",
      description:
        "Success comes from teamwork. We work closely with our clients as trusted partners.",
      icon: "🤝",
    },
  ];

  const handleLearnMore = () => {
    // For React Router, you'd use navigate('/about-us') or <Link to="/about-us">
    window.location.href = "/about";
  };

  return (
    <section className="about-panel">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-intro">
              <span className="section-label">About Us</span>
              <h2>Building the future, one solution at a time</h2>
              <p className="main-description">
                We're a passionate team of innovators, designers, and
                problem-solvers dedicated to transforming ideas into reality.
                With over a decade of experience, we've helped businesses of all
                sizes achieve their digital ambitions through creative solutions
                and cutting-edge technology.
              </p>
            </div>

            <div className="company-values">
              <h3>What drives us</h3>
              <div className="values-grid">
                {values.map((value, index) => (
                  <div key={index} className="value-card">
                    <div className="value-icon">{value.icon}</div>
                    <div className="value-content">
                      <h4>{value.title}</h4>
                      <p>{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="stats-container">
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="landing-stat-card">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mission-showcase">
              <div className="mission-card">
                <div className="mission-icon">🎯</div>
                <h4>Our Mission</h4>
                <p>
                  To deliver innovative solutions that drive digital
                  transformation and empower businesses to thrive in the modern
                  world.
                </p>
              </div>

              <div className="vision-card">
                <div className="vision-icon">🌟</div>
                <h4>Our Vision</h4>
                <p>
                  To be the leading partner for businesses seeking cutting-edge
                  technology solutions and exceptional service excellence.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <button className="landing-cta-button" onClick={handleLearnMore}>
            Learn More About Us →
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingAboutUs;
