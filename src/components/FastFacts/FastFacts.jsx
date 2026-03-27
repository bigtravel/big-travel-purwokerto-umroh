import React from 'react';
import './FastFacts.css';

const FastFacts = ({ region }) => {
  return (
    <div className="fast-facts-bar">
      <div className="container facts-container">
        <div className="fact-item">
          <span className="fact-icon">📍</span>
          <span className="fact-text">Start {region}</span>
        </div>
        <div className="fact-divider"></div>
        <div className="fact-item">
          <span className="fact-icon">✈️</span>
          <span className="fact-text">Saudi/Garuda</span>
        </div>
        <div className="fact-divider"></div>
        <div className="fact-item">
          <span className="fact-icon">🏨</span>
          <span className="fact-text">Hotel Dekat Masjid</span>
        </div>
        <div className="fact-divider"></div>
        <div className="fact-item">
          <span className="fact-icon">🗓️</span>
          <span className="fact-text">23 Juni 2026</span>
        </div>
      </div>
    </div>
  );
};

export default FastFacts;
