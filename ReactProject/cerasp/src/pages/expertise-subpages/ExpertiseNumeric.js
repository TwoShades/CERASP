import React, { useContext } from 'react';
import { Database, Activity, BarChart2, Zap } from 'lucide-react';
import './css/ExpertiseNumeric.css';
import { LanguageContext } from "../../contexts/LanguageContext";
import expertiseTranslations from "./expertise-translations.json";

const ExpertiseNumeric = () => {
  const { language } = useContext(LanguageContext);
  const numeric = expertiseTranslations.numeric_healthcare;
  const performanceData = [
    { name: 'Patient Outcomes', value: 87 },
    { name: 'Cost Efficiency', value: 92 },
    { name: 'Data Security', value: 95 },
    { name: 'User Satisfaction', value: 89 },
  ];

  return (
    <div className="expertise-numeric-container">
      <div className="expertise-numeric-left">
        <div className="deep-blue-panel">
          <h2 className="expertise-title">Healthcare Analytics</h2>
          <div className="numeric-stats">
            <div className="stat-block">
              <span className="stat-number">95%</span>
              <span className="stat-label">Accuracy</span>
            </div>
            <div className="stat-block">
              <span className="stat-number">2.4x</span>
              <span className="stat-label">Efficiency</span>
            </div>
            <div className="stat-block">
              <span className="stat-number">40%</span>
              <span className="stat-label">Cost Reduction</span>
            </div>
          </div>
          
          <div className="custom-chart-container">
            <div className="chart-label">Performance Metrics</div>
            <div className="custom-chart">
              {performanceData.map((item, index) => (
                <div key={index} className="chart-item">
                  <div className="chart-item-label">{item.name}</div>
                  <div className="chart-bar-container">
                    <div 
                      className="chart-bar" 
                      style={{width: `${item.value}%`}}
                    ></div>
                    <span className="chart-value">{item.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="expertise-numeric-right">
        <div className="content-block">
          <h1 className="main-title">{numeric.title[language]}</h1>
          <p className="main-description">
            {numeric.content[language]}
          </p>
          
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <Database size={24} />
              </div>
              <div className="feature-content">
                <h3>Health Data Analysis</h3>
                <p>Transform raw healthcare data into actionable insights</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <Activity size={24} />
              </div>
              <div className="feature-content">
                <h3>Real-Time Monitoring</h3>
                <p>Continuous patient monitoring systems for timely interventions</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <BarChart2 size={24} />
              </div>
              <div className="feature-content">
                <h3>Predictive Analytics</h3>
                <p>Anticipate healthcare needs through pattern recognition</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <Zap size={24} />
              </div>
              <div className="feature-content">
                <h3>Digital Integration</h3>
                <p>Seamless connection of existing healthcare systems</p>
              </div>
            </div>
          </div>
          
          <button className="learn-more-btn">Learn More About Our Solutions</button>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseNumeric;