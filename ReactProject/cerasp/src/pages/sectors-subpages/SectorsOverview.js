import React, { useState } from 'react';
import './css/SectorsOverview.css';

const OverviewPanel = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const contentData = [
    { name: 'Preformulation', type: 'major-card', points: 4, color: '#3b82f6', icon: '🔬' },
    { name: 'Formulation', type: 'paragraph-cards', points: 4, color: '#10b981', icon: '⚗️' },
    { name: 'Research & Technical Support', type: 'detailed', points: 6, color: '#8b5cf6', icon: '🔍' },
    { name: 'Regulatory Affairs', type: 'comprehensive', points: 14, color: '#f59e0b', icon: '📋' },
    { name: 'Prototyping', type: 'overview', points: 1, color: '#ef4444', icon: '🛠️' },
    { name: 'Pharmaceutical', type: 'overview', points: 1, color: '#06b6d4', icon: '💊' },
    { name: 'Therapeutic Molecules', type: 'specialty-cards', points: 8, color: '#84cc16', icon: '🧬' },
    { name: 'Chemistry & Extraction', type: 'process-steps', points: 7, color: '#f97316', icon: '⚛️' },
    { name: 'R&D Scale-up', type: 'approach-cards', points: 12, color: '#ec4899', icon: '📈' },
    { name: 'Protein Synthesis', type: 'method-cards', points: 12, color: '#6366f1', icon: '🔗' },
    { name: 'Biopharmaceutical Production', type: 'process-cards', points: 11, color: '#14b8a6', icon: '🏭' },
    { name: 'Feasibility & Tech Transfer', type: 'approach-cards', points: 8, color: '#a855f7', icon: '🔄' },
    { name: 'Training Program', type: 'programs', points: 4, color: '#22c55e', icon: '🎓' },
    { name: 'Support Services', type: 'assistance', points: 1, color: '#64748b', icon: '🤝' },
  ];

  const getContentSize = (points) => {
    if (points >= 12) return 'xl';
    if (points >= 8) return 'lg';
    if (points >= 4) return 'md';
    return 'sm';
  };

  const getTypeLabel = (type) => {
    const labels = {
      'major-card': 'Key Points',
      'paragraph-cards': 'Info Cards',
      'detailed': 'Details',
      'comprehensive': 'Guidelines',
      'overview': 'Overview',
      'specialty-cards': 'Specialties',
      'process-steps': 'Steps',
      'approach-cards': 'Approaches',
      'method-cards': 'Methods',
      'process-cards': 'Processes',
      'programs': 'Programs',
      'assistance': 'Support',
    };
    return labels[type] || 'Content';
  };

  const totalSections = contentData.length;
  const totalPoints = contentData.reduce((sum, item) => sum + item.points, 0);

  return (
    <div className="dashboard-wrapper">
      <div className="header-section">
        <h1>Content Overview</h1>
        <div className="metrics-group">
          <span className="metric-item">{totalSections} Sections</span>
          <span className="metric-item">{totalPoints} Key Points</span>
          <button 
            className={`toggle-btn ${isExpanded ? 'open' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? '−' : '+'}
          </button>
        </div>
      </div>

      <div className={`grid-container ${isExpanded ? 'open' : ''}`}>
        {contentData.map((item, index) => (
          <div
            key={index}
            className={`card ${getContentSize(item.points)} ${activeSection === index ? 'active' : ''}`}
            style={{ '--accent-color': item.color }}
            onMouseEnter={() => setActiveSection(index)}
            onMouseLeave={() => setActiveSection(null)}
          >
            <div className="icon-box">{item.icon}</div>
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <div className="card-footer">
                <span className="tag-label">{getTypeLabel(item.type)}</span>
                <span className="point-badge">{item.points}</span>
              </div>
            </div>
            <div className="tooltip">
              <p>Click to navigate to {item.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="quick-links">
        <div className="links-header">
          <h3>Quick Access</h3>
        </div>
        <div className="link-tags">
          {['Major Sections', 'Processes', 'Support'].map((category, idx) => (
            <button key={idx} className="link-tag">
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewPanel;
