import React from 'react';
import hotelMakkahImg from '../../assets/hotel-azka-al-safa.JPEG';
import hotelMadinahImg from '../../assets/hotel-dar-an-naem.jpg';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing-section" id="hotel">
      <div className="container">
        <div className="pricing-box">
          <div className="pricing-header">
            <h3 className="package-title">Paket Umroh 10 Hari - Keberangkatan 23 Juni 2026</h3>
            <div className="package-price">
              <span className="currency">Rp</span>
              <span className="amount">35.000.000</span>
              <span className="per-pax">/pax</span>
            </div>
          </div>
          
          <div className="pricing-split">

            <div className="pricing-left">
              <h4 className="split-title">Akomodasi Hotel Bintang 4/5</h4>
              <div className="hotel-cards">
                <div className="hotel-card">
                  <img src={hotelMakkahImg} alt="Hotel Azka Al Safa Makkah" className="hotel-img" />
                  <div className="hotel-info">
                    <span className="hotel-location">📍 Makkah</span>
                    <h5 className="hotel-name">Azka Sofa (Bintang 5)</h5>
                  </div>
                </div>
                <div className="hotel-card">
                  <img src={hotelMadinahImg} alt="Hotel Dar An Naem Madinah" className="hotel-img" />
                  <div className="hotel-info">
                    <span className="hotel-location">📍 Madinah</span>
                    <h5 className="hotel-name">Dar An Naem (Bintang 4)</h5>
                  </div>
                </div>
              </div>
            </div>


            <div className="pricing-right">
              <h4 className="split-title">Fasilitas & Layanan</h4>
              <ul className="benefit-list">
                <li><span className="check-icon">✅</span> Tiket Pesawat PP (Saudi/Garuda)</li>
                <li><span className="check-icon">✅</span> Visa Umroh & Asuransi Perjalanan</li>
                <li><span className="check-icon">✅</span> City Tour Makkah & Madinah</li>
                <li><span className="check-icon">✅</span> Makan 3x Sehari (Menu Indonesia)</li>
                <li><span className="check-icon">✅</span> Muthawwif/Pembimbing Tersertifikasi</li>
                <li><span className="check-icon">✅</span> Kajian Sirah Nabawiyah Eksklusif</li>
                <li><span className="check-icon">✅</span> Handling Bandara & Perlengkapan</li>
              </ul>
              <div className="pricing-cta-wrap">
                <button className="btn btn-primary btn-block" onClick={() => { const el = document.getElementById('daftar'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>Daftar Sekarang</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
