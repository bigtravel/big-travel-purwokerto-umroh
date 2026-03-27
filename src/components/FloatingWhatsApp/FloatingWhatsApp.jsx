import React from 'react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/62816677408" 
      className="floating-wa" 
      target="_blank" 
      rel="noreferrer"
      aria-label="Chat WhatsApp"
    >
      <div className="wa-content">
        <span className="wa-icon">💬</span>
        <span className="wa-text">Konsultasi</span>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
