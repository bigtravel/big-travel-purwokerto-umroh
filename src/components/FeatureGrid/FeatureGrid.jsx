import React from 'react';
import './FeatureGrid.css';

const FeatureGrid = ({ region }) => {
  return (
    <section className="feature-section" id="program">
      <div className="container">
        <div className="feature-header">
          <span className="feature-subtitle">Benefit Eksklusif</span>
          <h2 className="feature-title">Kenapa Warga {region} Memilih BIG Travel?</h2>
        </div>
        
        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon">🚌</span>
            </div>
            <h3 className="card-title">Armada Sendiri</h3>
            <p className="card-desc">
              Pulang Pergi dijemput armada eksklusif kami. Titik kumpul nyaman langsung di <strong>{region}</strong>.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon">🚄</span>
            </div>
            <h3 className="card-title">Kereta Cepat Haramain</h3>
            <p className="card-desc">
              <strong>GRATIS!</strong> Nikmati perjalanan Madinah-Makkah secepat kilat dengan tiket kereta cepat.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon">📖</span>
            </div>
            <h3 className="card-title">Museum Wahyu</h3>
            <p className="card-desc">
              Napak tilas sejarah turunnya wahyu pertama di Museum Wahyu <strong>(Tiket Masuk Gratis)</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
